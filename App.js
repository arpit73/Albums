import React from 'react';
import { AppRegistry, View } from 'react-native';

import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View>
        <Header headerText={'Suck Yeah!'} />
        <AlbumList />
    </View>
);

AppRegistry.registerComponent('albums', () => App);

export default App;
