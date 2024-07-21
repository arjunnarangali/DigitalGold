import React from 'react';
import Navigation from './src/navigation';
import {Provider} from 'react-redux';
import store, {persistor} from './src/redux/store';
import {PersistGate} from 'redux-persist/integration/react';
import {StatusBar} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle={'light-content'} backgroundColor={'#101010'} />
        <Navigation />
      </PersistGate>
    </Provider>
  );
};

export default App;
