import React from 'react';
import { View } from 'react-native';

const CardSection = props => {
    <View styles={styles.containerStyles}>{props.children}</View>;
};

const styles = {
    containerStyles: {
        borderWidth: 1,
        padding: 5,
        backgroundColor: '#fff',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        borderColr: '#ddd',
        postion: 'relative'
    }
};

export default CardSection;
