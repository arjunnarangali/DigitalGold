import {isEqual} from 'lodash';
import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

type props = {
  iconName: string;
  size: number;
  color: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
};
const MaterialIcons = ({iconName, size, color, onPress, style}: props) => {
  return <Icon name={iconName} size={size} color={color} onPress={onPress} style={style} />;
};

export default React.memo(MaterialIcons, (prev, next) => isEqual(prev, next));
