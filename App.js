import React from 'react';
import { AppRegistry } from 'react-native';
import Header from './src/components/header';

const App = () => <Header headerText={'Suck Yeah!'} />;

AppRegistry.registerComponent('albums', () => App);

export default App;
