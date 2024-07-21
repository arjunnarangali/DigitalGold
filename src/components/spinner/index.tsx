import React from 'react';
import {ActivityIndicator, Modal, StyleSheet} from 'react-native';

type props = {
  isVisible: boolean;
};
const Spinner = ({isVisible}: props) => {
  return (
    <Modal transparent visible={isVisible}>
      <ActivityIndicator size={40} color={'#F4F5F5'} style={style.mainContainer} />
    </Modal>
  );
};
const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
});

export default React.memo(Spinner, (prev, next) => prev.isVisible === next.isVisible);
