import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { useAppTheme } from '../styles/theme';

const backgroundImage = require('../assets/background.png');

function Home() {
    const { theme } = useAppTheme();


    return (
        <ImageBackground source={backgroundImage} style={styles.background} resizeMode="cover">
            <View style={styles.overlay}>
                <Text style={[styles.title, { color: theme.text }]}>Music AI</Text>
                <Text style={[styles.subtitle, { color: theme.text }]}>
                    Create and explore music with smart tools
                </Text>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.35)',
        justifyContent: 'center',
        paddingHorizontal: 24,
    },
    title: {
        fontSize: 40,
        fontWeight: '700',
        textAlign: 'center',
    },
    subtitle: {
        marginTop: 8,
        fontSize: 16,
        textAlign: 'center',
    },
});

export default Home;
