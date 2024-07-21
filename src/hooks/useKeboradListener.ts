import {useState, useEffect, useCallback} from 'react';
import {EmitterSubscription, Keyboard} from 'react-native';

export const useKeyboardListener = (): [boolean, () => void] => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const hideKeyboard = useCallback(() => {
    Keyboard.dismiss();
  }, []);
  useEffect(() => {
    let keyboardDidShowListener: EmitterSubscription;
    let keyboardDidHideListener: EmitterSubscription;
    keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
      setIsKeyboardVisible(true);
    });
    keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setIsKeyboardVisible(false);
      Keyboard.dismiss();
    });
    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  return [isKeyboardVisible, hideKeyboard];
};
