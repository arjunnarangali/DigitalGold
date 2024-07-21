import React, {useCallback, useState} from 'react';
import {
  Modal,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import MaterialIcons from '../materialIcon';
import {useDispatch, useSelector} from 'react-redux';
import {getUserAlertValues} from '../../redux/userGoldDetails/reducer';
import useCreateStyle from './style';
import PrimaryButton from '../primaryButton';
import {setUserAlertValues} from '../../redux/userGoldDetails/action';

const PriceAlertModal = () => {
  const userAlertValues = useSelector(getUserAlertValues);
  const [price, setPrice] = useState('');
  const [selectedTab, setSelectedTab] = useState('buy');
  const [isVisible, setIsVisible] = useState(false);
  const style = useCreateStyle();
  const dispatch = useDispatch();

  const handleConfirm = useCallback(() => {
    dispatch(setUserAlertValues({...userAlertValues, [selectedTab]: parseFloat(price)}));
    setIsVisible(false);
    setPrice('');
  }, [dispatch, price, selectedTab, userAlertValues]);

  const handleSellButtonClick = useCallback(() => {
    if (userAlertValues.sell) {
      setPrice(userAlertValues.sell + '');
    }
    setSelectedTab('sell');
  }, [userAlertValues.sell]);

  const handleBuyButtonClick = useCallback(() => {
    if (userAlertValues.buy) {
      setPrice(userAlertValues.buy + '');
    }
    setSelectedTab('buy');
  }, [userAlertValues.buy]);
  return (
    <>
      <MaterialIcons
        iconName={
          userAlertValues?.buy || userAlertValues?.sell ? 'notifications-active' : 'notifications'
        }
        size={18}
        color={userAlertValues?.buy || userAlertValues?.sell ? '#E8CF8D' : '#f2f2f2'}
        onPress={() => {
          setIsVisible(true);
        }}
      />
      <Modal visible={isVisible} transparent>
        <TouchableWithoutFeedback
          onPress={() => {
            setIsVisible(false);
          }}>
          <View style={style.modalContainer}>
            <View style={style.contentContainer}>
              <Text style={style.headerText}>{'Price Alert'}</Text>
              <View style={style.buttonMainView}>
                <TouchableOpacity
                  style={[style.buttonContainer, selectedTab === 'buy' && style.selectedTabBgColor]}
                  onPress={handleBuyButtonClick}>
                  <Text
                    style={[style.buttonText, selectedTab === 'buy' && style.selectedButtonColor]}>
                    {'Buy'}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[
                    style.buttonSellContainer,
                    selectedTab === 'sell' && style.selectedTabBgColor,
                  ]}
                  onPress={handleSellButtonClick}>
                  <Text
                    style={[style.buttonText, selectedTab === 'sell' && style.selectedButtonColor]}>
                    {'Sell'}
                  </Text>
                </TouchableOpacity>
              </View>
              <Text style={style.priceLimitText}>{'Set your price limit per mg'}</Text>
              <TextInput
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
                maxLength={3}
                style={style.inputText}
                keyboardAppearance={'dark'}
              />
              <PrimaryButton
                title={'Confirm'}
                onPress={handleConfirm}
                containerStyle={style.confirmButtonStyle}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

export default React.memo(PriceAlertModal);
