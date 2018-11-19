import React, { Component } from 'react';
import { Text, View } from 'react-native';
import axios from 'axios';

class AlbumList extends Component {
    state = { albums: [] };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums').then(res => {
            this.setState({ albums: res.data });
        });
    }
    render() {
        return (
            <View>
                <Text>Album List!!</Text>
            </View>
        );
    }
}

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        elevation: 5,
        position: 'relative'
    },
    textStyle: {
        fontSize: 20
    }
};

export default AlbumList;
