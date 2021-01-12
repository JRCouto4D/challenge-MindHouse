import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

// import { Container } from './styles';

function src() {
  YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default src;
