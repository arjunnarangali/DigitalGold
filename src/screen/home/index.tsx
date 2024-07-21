import React from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import VendorCard from '../../components/vendorCard';
import PrimaryButton from '../../components/primaryButton';
import useCreateStyle from './style';
import {useKeyboardListener} from '../../hooks/useKeboradListener';
import usePriceDetails from './useGoldPriceDetails';
import Spinner from '../../components/spinner';
import {useSelector} from 'react-redux';
import {getUserGoldBalance} from '../../redux/userGoldDetails/reducer';
import ToastManager from 'toastify-react-native';
import Notification from '../../components/notification';

const ONE_GRAM = 1000;
const Home = () => {
  const style = useCreateStyle();
  const [isKeyboardVisible, hideKeyboard] = useKeyboardListener();
  const goldBalance: number = useSelector(getUserGoldBalance);

  const {
    goldRate,
    selectedType,
    selectedVendor,
    isSpinner,
    getBuyPrice,
    getSellPrice,
    goldAmount,
    onChangeText,
    updateSelectedVendor,
    navigationTransactionCompleteScreen,
    inputRef,
  } = usePriceDetails(goldBalance);
  return (
    <KeyboardAvoidingView
      style={style.mainContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ToastManager width={300} height={100} />
      <TouchableWithoutFeedback onPress={hideKeyboard} disabled={!isKeyboardVisible}>
        <View style={[style.mainContainer]}>
          <View style={style.headerMainContainer}>
            {isKeyboardVisible && (
              <View style={style.hederTenantText}>
                <Text style={[style.headerText, {color: style.priceText.color}]}>
                  {selectedVendor?.dealerName ?? ''}
                </Text>
              </View>
            )}

            <View style={[style.headerContainer]}>
              {!isKeyboardVisible && <Text style={style.headerText}>{'My Gold'}</Text>}
              <View style={style.notificationContainer}>
                <Notification />
              </View>
            </View>

            {!isKeyboardVisible && (
              <VendorCard price={goldRate.buy + ''} selectedVendor={updateSelectedVendor} />
            )}

            <View style={style.goldBalanceContainer}>
              <Text style={style.goldBalanceText}>{'My gold balance'}</Text>
              <View style={style.flexCenter}>
                <View style={style.goldenView} />
                <Text style={style.goldBalanceText}>{`${
                  goldBalance < ONE_GRAM ? goldBalance : (goldBalance / ONE_GRAM).toFixed(2)
                }${goldBalance < ONE_GRAM ? 'mg' : 'g'}`}</Text>
              </View>
            </View>
          </View>

          <View style={style.bottomMainContainer}>
            <View style={style.flexAlignCenter}>
              <Text style={style.chooseValueText}>{'Choose your value'}</Text>
              <View style={[style.flexRow, style.flexAlignCenter]}>
                <Text style={style.priceText}>{'₹ '}</Text>
                <TextInput
                  ref={inputRef}
                  onChangeText={onChangeText}
                  style={[style.priceText]}
                  placeholder={'0.00'}
                  placeholderTextColor={style.priceText.color}
                  keyboardType={'number-pad'}
                  keyboardAppearance={'dark'}
                  cursorColor={style.priceText.color}
                  value={goldAmount.amount}
                  maxLength={6}
                />
                <Text style={style.priceText}>{`/ ${goldAmount.quantity} mg`}</Text>
              </View>
            </View>
            {isKeyboardVisible && (
              <PrimaryButton
                title={'PROCEED'}
                containerStyle={style.proceedContainer}
                onPress={navigationTransactionCompleteScreen}
                isDisable={!goldAmount.amount}
              />
            )}
            <View style={style.buttonMainContainer}>
              <PrimaryButton title={'BUY'} onPress={getBuyPrice} />
              <PrimaryButton title={'SELL'} onPress={getSellPrice} />
            </View>

            <View style={style.flexRow}>
              <Text style={style.bottomPriceText}>{`${
                selectedType === 'buy' ? 'Buying' : 'Selling'
              } price ₹ ${goldRate[selectedType]} / mg`}</Text>
              <Text style={style.gstTextColor}>{' (including Tax/Gst)'}</Text>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
      <Spinner isVisible={isSpinner} />
    </KeyboardAvoidingView>
  );
};

export default Home;
