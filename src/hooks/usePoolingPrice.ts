import {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAlertValues} from '../redux/userGoldDetails/reducer';
import {priceService} from '../api/client';
import priceCalculatorService from '../services/priceCalculatorService';
import {setUserAlertValues} from '../redux/userGoldDetails/action';
const HTTP_POOLING_INTERVAL = 1000 * 60 * 60;

function usePoolingPrice() {
  const alertDetails = useSelector(getUserAlertValues);
  const dispatch = useDispatch();
  const fetchLatestPrices = useCallback(async () => {
    const sellingPricePromise = priceService.getSellingPrice();
    const buyingPricePromise = priceService.getBuyingPrice();
    try {
      const [sellingPrice, buyingPrice] = await Promise.all([
        sellingPricePromise,
        buyingPricePromise,
      ]);
      const [{data: sellResponse}, {data: buyResponse}] = [sellingPrice, buyingPrice];

      // condition used check sell value limit exceeded
      if (
        alertDetails.sell &&
        Number.isFinite(alertDetails.sell) &&
        alertDetails.sell <= priceCalculatorService.priceCalculationPerMg(sellResponse)
      ) {
        const resetSellAlert = () => {
          dispatch(setUserAlertValues({...alertDetails, sell: null}));
        };
        priceCalculatorService.priceAlert(
          'The selling price has exceeded your set limit.\nThe current limit will now be removed.',
          resetSellAlert,
        );
      }

      // condition used check buy value limit exceeded
      if (
        alertDetails.buy &&
        Number.isFinite(alertDetails.buy) &&
        alertDetails.buy <= priceCalculatorService.priceCalculationPerMg(buyResponse)
      ) {
        const resetBuyAlert = () => {
          dispatch(setUserAlertValues({...alertDetails, buy: null}));
        };
        priceCalculatorService.priceAlert(
          'The buying price has exceeded your set limit.\nThe current limit will now be removed.',
          resetBuyAlert,
        );
      }
    } catch (error) {
      console.log(error);
    }
  }, [alertDetails, dispatch]);

  useEffect(() => {
    fetchLatestPrices();
    const poolingTImer = setInterval(fetchLatestPrices, HTTP_POOLING_INTERVAL);
    return () => clearInterval(poolingTImer);
  }, [fetchLatestPrices]);
}

export default usePoolingPrice;
