import {StyleSheet} from 'react-native';

const useCreateStyle = () => {
  return StyleSheet.create({
    mainContainer: {
      flex: 1,
      backgroundColor: '#222222',
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
    flexRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerText: {
      color: '#F6F0EB',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
    },
    referText: {
      color: '#333332',
      fontWeight: '400',
      fontSize: 12,
      lineHeight: 20,
    },
    referralContainer: {
      position: 'absolute',
      right: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    detailsContainer: {justifyContent: 'center', alignItems: 'center', marginTop: 30},
    roundCOntainer: {
      backgroundColor: '#E7CB89',
      height: 100,
      width: 100,
      borderRadius: 80,
      justifyContent: 'center',
      alignItems: 'center',
    },
    congratsText: {
      color: '#fff',
      fontSize: 16,
      marginVertical: 10,
      fontWeight: '500',
    },
    transSuccessMsg: {
      color: '#6C6C6C',
      fontSize: 12,
      marginBottom: 10,
      fontWeight: '400',
    },
    transDetailsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor: '#585858',
      marginHorizontal: 30,
      marginVertical: 20,
      borderRadius: 30,
      padding: 20,
    },
    tranHeader: {
      color: '#9A9A99',
      fontSize: 12,
      fontWeight: '500',
    },
    tranBody: {
      color: '#EDEEED',
      fontSize: 14,
      fontWeight: '600',
    },
    viewTransactionText: {
      color: '#EDEEED',
      fontSize: 14,
      fontWeight: '600',
      alignSelf: 'center',
      marginVertical: 10,
      opacity: 0.5,
    },
    homeButton: {alignSelf: 'center', marginTop: 70},
  });
};

export default useCreateStyle;
