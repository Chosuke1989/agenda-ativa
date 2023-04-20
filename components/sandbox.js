import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Sandbox() {
    return (
        <View style={styles.container}>
            <Text style={styles.caixaum}>um</Text>
            <Text style={styles.caixadois}>dois</Text>
            <Text style={styles.caixatrês}>três</Text>
            <Text style={styles.caixaquatro}>quatro</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        //flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems:  'flex-end',
        paddingTop: 40,
        backgroundColor: '#ddd',
    },
    caixaum: {
        backgroundColor: 'red',
        padding: 10,
    },
    caixadois: {
        backgroundColor: 'cyan',
        padding: 10,
    },
    caixatrês: {
        backgroundColor: 'violet',
        padding: 10,
    },
    caixaquatro: {
        backgroundColor: 'gold',
        padding: 10,
    }
});