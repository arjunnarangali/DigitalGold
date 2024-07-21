import {Alert} from 'react-native';
import {IGoldPrice} from '../models/goldPrice';

const priceCalculationPerMg = (data: IGoldPrice) =>
  (data.current_price + (data.current_price * (data.applicable_tax || 0)) / 100) / 1000;

/**
 * the alert used to inform the user.
 * @param body: message to display
 * @param handleOnPress: action when user click on DONE button.
 */
const priceAlert = (body: string, handleOnPress: () => void) => {
  Alert.alert(
    'Price Alert',
    `${body}`,
    [
      {
        text: 'DONE',
        onPress: handleOnPress,
      },
    ],
    {cancelable: false},
  );
};

export default {
  priceCalculationPerMg,
  priceAlert,
};
