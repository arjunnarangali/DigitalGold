import {StyleSheet} from 'react-native';

export const styleSheet = () => {
  return StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#585858',
      padding: 20,
      height: 100,
      width: 100,
      borderRadius: 65,
    },
    buttonText: {
      color: '#E8E9E9',
      fontSize: 18,
      fontWeight: '600',
    },
    isDisable: {
      opacity: 0.3,
    },
  });
};
