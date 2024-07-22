import {StyleSheet} from 'react-native';

const useCreateStyle = () => {
  return StyleSheet.create({
    mainContainer: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(33, 33, 33, 0.7)',
    },
    contentContainer: {
      backgroundColor: '#f2f2f2',
      width: 300,
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
    },
    headerText: {fontSize: 18, fontWeight: 'bold', marginBottom: 10, color: '#020202'},
    buttonMainView: {flexDirection: 'row', marginBottom: 20},
    buttonContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      backgroundColor: 'rgba(33, 33, 33, 0.5)',
    },
    buttonSellContainer: {
      flex: 1,
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'rgba(33, 33, 33, 0.5)',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
    selectedTabBgColor: {
      backgroundColor: 'green',
    },
    buttonText: {
      color: '#020202',
      fontSize: 14,
      fontWeight: '500',
    },
    selectedButtonColor: {
      color: '#f2f2f2',
    },
    priceLimitText: {
      color: '#020202',
      fontSize: 14,
      fontWeight: '500',
      marginBottom: 5,
    },
    inputText: {
      height: 40,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 20,
      width: '100%',
      paddingLeft: 10,
    },
    confirmButtonStyle: {borderRadius: 10, padding: 5, height: 50},
    PD_10: {padding: 10},
  });
};

export default useCreateStyle;
