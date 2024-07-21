import {useCallback, useEffect, useRef, useState} from 'react';
import {IGoldPrice} from '../../models/goldPrice';
import {Dealer} from '../../components/vendorCard';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation';
import {useDispatch} from 'react-redux';
import {setUserGoldBalance} from '../../redux/userGoldDetails/action';
import {Toast} from 'toastify-react-native';
import useValidate from '../../hooks/useValidate';
import {PRICE_TYPES} from './constants';
import {priceService} from '../../api/client';
import priceCalculatorService from '../../services/priceCalculatorService';
import {TextInput} from 'react-native';

const initialPriceRate = {
  buy: 0,
  sell: 0,
};
const initialGoldAmount = {
  amount: '',
  quantity: '0.00',
};

const usePriceDetails = (userGoldBalance: number) => {
  const [goldRate, setGoldRate] = useState({...initialPriceRate});
  const [goldAmount, setGoldAmount] = useState({...initialGoldAmount});
  const [selectedType, setSelectedType] = useState<keyof typeof initialPriceRate>(PRICE_TYPES.BUY);
  const [selectedVendor, setSelectedVendor] = useState<Dealer | undefined>(undefined);
  const [isSpinner, setIsSpinner] = useState(false);
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Home'>>();
  const dispatch = useDispatch();
  const {validate} = useValidate();
  const inputRef = useRef<TextInput>(null);
  const priceCalculation = useCallback(
    (data: IGoldPrice | null, priceType: keyof typeof initialPriceRate) => {
      if (!data) {
        return;
      }
      const price = priceCalculatorService.priceCalculationPerMg(data);
      setGoldRate(e => ({...e, [priceType]: price.toFixed(2)}));
      setSelectedType(priceType);
    },
    [],
  );

  const handleOnChangeText = (e: string) => {
    if (!e) {
      setGoldAmount({...initialGoldAmount});
      return;
    }
    if (validate('number', e)) {
      setGoldAmount({
        amount: e,
        quantity: (parseFloat(e) * goldRate[selectedType]).toFixed(2),
      });
    } else {
      setGoldAmount(data => ({...data, amount: e.slice(0, -1)}));
    }
  };

  const getBuyPrice = useCallback(
    async (showKeyBoard = true) => {
      try {
        setIsSpinner(true);
        const {data} = await priceService.getBuyingPrice();
        priceCalculation(data, PRICE_TYPES.BUY);
        if (showKeyBoard) {
          // timer added to visible keyboard after hiding the spinner
          setTimeout(() => inputRef.current?.focus(), 100);
        }
      } catch (error) {
        Toast.error('Something went wrong', 'top');
      } finally {
        setIsSpinner(false);
      }
    },
    [priceCalculation],
  );

  const getSellPrice = useCallback(async () => {
    try {
      setIsSpinner(true);
      const {data} = await priceService.getSellingPrice();
      priceCalculation(data, PRICE_TYPES.SELL);
      setTimeout(() => inputRef.current?.focus(), 100);
    } catch (error) {
      Toast.error('Something went wrong', 'top');
    } finally {
      setIsSpinner(false);
    }
  }, [priceCalculation]);

  const updateSelectedVendor = useCallback(
    (data: Dealer | undefined) => setSelectedVendor(data),
    [],
  );

  const navigationTransactionCompleteScreen = useCallback(() => {
    if (!selectedVendor) {
      return;
    }
    if (selectedType === PRICE_TYPES.BUY) {
      dispatch(setUserGoldBalance(parseFloat(goldAmount.quantity)));
      setGoldAmount({...initialGoldAmount});
    }
    if (selectedType === PRICE_TYPES.SELL) {
      if (parseFloat(goldAmount.quantity) <= userGoldBalance) {
        dispatch(setUserGoldBalance(parseFloat(goldAmount.quantity) * -1));
        setGoldAmount({...initialGoldAmount});
      } else {
        Toast.warn('Not enough gold balance', 'top');
        return;
      }
    }
    navigation.navigate('TransactionSuccess', {
      item: selectedVendor,
      goldDetails: {...goldAmount, type: selectedType},
    });
  }, [dispatch, goldAmount, navigation, selectedVendor, selectedType, userGoldBalance]);

  useEffect(() => {
    getBuyPrice(false);
  }, [getBuyPrice]);

  return {
    goldRate,
    selectedType,
    selectedVendor,
    isSpinner,
    inputRef,
    getSellPrice,
    getBuyPrice,
    goldAmount,
    onChangeText: handleOnChangeText,
    updateSelectedVendor,
    navigationTransactionCompleteScreen,
  };
};

export default usePriceDetails;
