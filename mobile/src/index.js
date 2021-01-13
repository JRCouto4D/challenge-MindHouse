import 'intl';
import 'intl/locale-data/jsonp/pt-BR';
import 'react-native-gesture-handler';
import React from 'react';
import { YellowBox, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

// import { Container } from './styles';

function src() {
  YellowBox.ignoreWarnings(['VirtualizedLists should never be nested']);
  YellowBox.ignoreWarnings(['YellowBox has be']);

  return (
    <NavigationContainer>
      <StatusBar translucent backgroundColor="transparent" />
      <Routes />
    </NavigationContainer>
  );
}

export default src;
