import React, {useMemo} from 'react';
import {TouchableOpacity, Text, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {styleSheet} from './style';
import {isEqual} from 'lodash';

type props = {
  title: string;
  onPress: () => void;
  titleStyle?: StyleProp<TextStyle>;
  isDisable?: boolean;
  containerStyle?: StyleProp<ViewStyle>;
};
const PrimaryButton = (props: props) => {
  const style = useMemo(styleSheet, []);
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[style.mainContainer, props?.containerStyle, props?.isDisable && style.isDisable]}
      disabled={props?.isDisable}>
      <Text style={[style.buttonText, props?.titleStyle]}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default React.memo(PrimaryButton, (prev, next) => isEqual(prev, next));
