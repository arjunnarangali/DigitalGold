import React, {useCallback} from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import useCreateStyle from './style';
import MaterialIcon from '../../components/materialIcon';
import PrimaryButton from '../../components/primaryButton';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation';

const TransactionSuccess = () => {
  const navigation = useNavigation();
  const style = useCreateStyle();
  const goBack = useCallback(() => navigation.goBack(), [navigation]);
  const routeParams = useRoute<RouteProp<RootStackParamList, 'TransactionSuccess'>>().params;
  return (
    <View style={style.mainContainer}>
      <View style={style.headerMainContainer}>
        <View style={[style.headerContainer]}>
          <TouchableWithoutFeedback onPress={goBack}>
            <View style={style.flexRow}>
              <MaterialIcon iconName={'arrow-back-ios'} size={12} color={'#F6F0EB'} />
              <Text style={style.headerText}>{'My Gold'}</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={style.referralContainer}>
            <Text style={[style.referText]}>{'Refer and earn '}</Text>
            <MaterialIcon iconName={'send'} size={14} color={style.referText.color} />
          </View>
        </View>

        <View style={style.detailsContainer}>
          <View style={style.roundCOntainer}>
            <MaterialIcon iconName={'check'} color="#FFFFFF" size={60} />
          </View>
          <Text style={style.congratsText}>{'Congratulation'}</Text>
          <Text style={style.transSuccessMsg}>
            {'Transaction successful for the gold purchase'}
          </Text>
        </View>

        <View style={style.transDetailsContainer}>
          <View>
            <Text style={style.tranHeader}>
              {routeParams.goldDetails.type === 'buy' ? 'Purchased From' : 'Selling To'}
            </Text>
            <Text style={style.tranBody}> {routeParams.item.dealerName}</Text>
          </View>
          <View>
            <Text style={style.tranHeader}> {'Value'}</Text>
            <Text style={style.tranBody}> {`₹ ${routeParams.goldDetails.amount}`}</Text>
          </View>
          <View>
            <Text style={style.tranHeader}> {'Weights'}</Text>
            <Text style={style.tranBody}> {`${routeParams.goldDetails.quantity}mg`}</Text>
          </View>
        </View>

        <Text style={style.viewTransactionText}>{'View Transaction'}</Text>
      </View>

      <PrimaryButton title="Home" containerStyle={style.homeButton} onPress={goBack} />
    </View>
  );
};

export default TransactionSuccess;
