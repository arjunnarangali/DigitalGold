import {StyleSheet} from 'react-native';

const useCreateStyle = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#222222',
      justifyContent: 'space-between',
    },
    headerMainContainer: {
      backgroundColor: '#101010',
      borderBottomLeftRadius: 50,
      borderBottomRightRadius: 50,
      paddingVertical: 20,
    },
    headerContainer: {
      marginTop: 10,
      paddingLeft: 10,
      flexDirection: 'row',
      alignItems: 'center',
    },
    notificationContainer: {position: 'absolute', right: 10},
    headerText: {
      color: '#F6F0EB',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
    },
    hederTenantText: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      alignItems: 'center',
      marginTop: 20,
    },
    goldBalanceContainer: {
      alignSelf: 'center',
      marginTop: 10,
      justifyContent: 'center',
      gap: 5,
    },
    goldBalanceText: {
      color: '#F6F0EB',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
    },
    flexCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5,
    },
    goldenView: {
      marginRight: 3,
      width: 13,
      height: 13,
      borderRadius: 7,
      backgroundColor: '#EACF8E',
    },
    bottomMainContainer: {
      flex: 1,
      justifyContent: 'space-evenly',
      alignItems: 'center',
    },
    flexAlignCenter: {alignItems: 'center'},
    chooseValueText: {
      color: '#757575',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 20,
      marginVertical: 10,
    },
    priceText: {
      color: '#757575',
      fontWeight: '800',
      fontSize: 20,
      paddingHorizontal: 1,
    },
    buttonMainContainer: {
      flexDirection: 'row',
      marginVertical: 20,
      justifyContent: 'space-evenly',
      width: '100%',
    },
    flexRow: {
      flexDirection: 'row',
    },
    bottomPriceText: {
      color: '#888787',
      fontWeight: '600',
      fontSize: 12,
      lineHeight: 20,
    },
    gstTextColor: {
      color: '#484747',
    },
    proceedContainer: {
      paddingHorizontal: 20,
      paddingVertical: 5,
      width: '50%',
      borderRadius: 10,
      height: 40,
    },
  });
};

export default useCreateStyle;
