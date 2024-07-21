import {StyleSheet} from 'react-native';

export const useCreateStyle = () => {
  return StyleSheet.create({
    mainContainer: {
      height: 170,
      width: 200,
      backgroundColor: 'white',
      borderRadius: 25,
      position: 'relative',
      marginHorizontal: 10,
      overflow: 'visible',
      margin: 10,
      marginTop: 25,
    },
    topContainer: {
      flex: 0.5,
      backgroundColor: '#B29B85',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      justifyContent: 'center',
      alignItems: 'center',
    },
    vendorNameText: {
      color: '#D7CCC1',
      fontWeight: '800',
      fontSize: 18,
      lineHeight: 20,
    },
    qualityText: {
      color: '#D7CCC1',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
    },
    bottomContainer: {
      flex: 0.5,
      flexDirection: 'row',
      backgroundColor: '#D3B89E',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    dateText: {
      color: '#F6F0EB',
      fontWeight: '500',
      fontSize: 14,
      lineHeight: 20,
    },
    flexRow: {flexDirection: 'row'},
    active: {
      opacity: 1,
    },
    checkMark: {
      position: 'absolute',
      top: -10,
      right: 15,
      backgroundColor: '#E4C27F',
      color: '#674914',
      padding: 5,
      zIndex: 2,
      borderRadius: 50,
      shadowColor: 'black',
      shadowOffset: {width: 5, height: 5},
    },
    inactive: {
      opacity: 0.5,
    },
  });
};
