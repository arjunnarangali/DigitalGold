import React from 'react';
import {View, Text, TouchableWithoutFeedback} from 'react-native';
import MaterialIcon from '../materialIcon';
import {useCreateStyle} from './style';
import {FlatList} from 'react-native';
import useVendorListUpdate from './useVendorListUpdate';
import {isEqual} from 'lodash';

export type Dealer = {
  id: number;
  dealerName: string;
  header: string;
  rate: string;
  price: string | null;
  isSelected?: boolean;
};

/**
 * added mock data for the listing.
 * actual data will fetch form the api
 */
export const dealers: Dealer[] = [
  {
    id: 1,
    dealerName: 'Malabar Gold',
    header: '99.99% 24K pure gold',
    rate: '2',
    price: null,
  },
  {
    id: 2,
    dealerName: 'Muthoot Finance',
    header: '99.99% 24K pure gold',
    rate: '3',
    price: null,
  },
  {
    id: 3,
    dealerName: 'Joy Alukkas',
    header: '99.99% 24K pure gold',
    rate: '4',
    price: null,
  },
  {
    id: 4,
    dealerName: 'Malabar Gold',
    header: '99.99% 24K pure gold',
    rate: '2',
    price: null,
  },
  {
    id: 5,
    dealerName: 'Muthoot Finance',
    header: '99.99% 24K pure gold',
    rate: '3',
    price: null,
  },
  {
    id: 6,
    dealerName: 'Joy Aalukkas',
    header: '99.99% 24K pure gold',
    rate: '4',
    price: null,
  },
];

const VendorCard = ({item, onPress}: {item: Dealer; onPress: (item: Dealer) => void}) => {
  const style = useCreateStyle();
  return (
    <TouchableWithoutFeedback onPress={() => onPress(item)}>
      <View style={[style.mainContainer, item.isSelected ? style.active : style.inactive]}>
        {item.isSelected && (
          <View style={style.checkMark}>
            <MaterialIcon iconName={'check'} color="#674914" size={20} />
          </View>
        )}
        <View style={style.topContainer}>
          <View>
            <Text style={style.vendorNameText}>{item.dealerName}</Text>
            <Text style={style.qualityText}>{item.header}</Text>
          </View>
        </View>
        <View style={style.bottomContainer}>
          <View>
            <Text style={style.dateText}>{'Today'}</Text>
            <Text style={style.dateText}>{item.price ? `${item.price}/mg` : '---'}</Text>
          </View>
          <View style={style.flexRow}>
            <Text style={style.dateText}>{`${item?.rate}%`}</Text>
            <MaterialIcon iconName={'keyboard-double-arrow-up'} size={18} color={'#F6F0EB'} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

type VendorListProps = {
  price: string;
  selectedVendor: (data: Dealer | undefined) => void;
};
const VendorsList = ({price, selectedVendor}: VendorListProps) => {
  const {dealersList, onItemPress} = useVendorListUpdate(price, selectedVendor);
  return (
    <FlatList
      data={dealersList}
      renderItem={({item}) => <VendorCard item={item} onPress={onItemPress} />}
      keyExtractor={(_, index) => index.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      scrollEnabled
    />
  );
};

export default React.memo(VendorsList, (prev, next) => isEqual(prev, next));
