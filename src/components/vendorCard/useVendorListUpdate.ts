import {useState, useEffect, useCallback} from 'react';
import {Dealer, dealers} from './index';

const useVendorListUpdate = (price: string, selectedVendor: (data: Dealer | undefined) => void) => {
  const [dealersList, setDealersList] = useState<Dealer[] | []>([]);

  /**
   * used to get the selected item for the initial render
   * will update the after fetching data from api
   * then we can remove this useEffect.
   */
  useEffect(() => {
    const data = dealersList?.find(item => item && item.isSelected);
    selectedVendor(data);
  }, [dealersList, selectedVendor]);

  /**
   * price value fetching form buy apy and updated to each item
   * actual value will be get from api then we can remove the price update.
   */
  useEffect(() => {
    const updatedList = dealers.map((item, index) => {
      item.isSelected = !index;
      item.price = price; // need to remove
      return item;
    });
    setDealersList(updatedList);
  }, [price]);

  const onItemPress = useCallback((data: Dealer) => {
    const updatedList = dealers.map(item => {
      item.isSelected = data.id === item.id;
      return item;
    });
    setDealersList(updatedList);
  }, []);
  return {dealersList, onItemPress};
};

export default useVendorListUpdate;
