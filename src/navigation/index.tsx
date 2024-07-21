import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screen/home';
import TransactionSuccess from '../screen/transactionSuccess';
import {Dealer} from '../components/vendorCard';
import usePoolingPrice from '../hooks/usePoolingPrice';

export type RootStackParamList = {
  Home: undefined;
  TransactionSuccess: {
    item: Dealer;
    goldDetails: {
      amount: string;
      quantity: string;
      type: string;
    };
  };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const Navigation = () => {
  /**
   * hook used to pool the api to fetch latest price values and check the user alerts.
   */
  usePoolingPrice();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}} />
        <Stack.Screen
          name="TransactionSuccess"
          component={TransactionSuccess}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
