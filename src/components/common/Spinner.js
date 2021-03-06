import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = (props) => (
    <View style={[styles.spinnerStyle, props.style]}>
        <ActivityIndicator color='gray' size={props.size || 'large'} />
    </View>
);

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
};

export { Spinner };
