import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

// import { Container } from './styles';

function src() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default src;
