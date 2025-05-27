import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function OnboardingScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Elixir 🥗</Text>
            <Button title="Get Started" onPress={() => navigation.navigate('Login')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, justifyContent: 'center', alignItems: 'center'
    },
    title: {
        fontSize: 24, fontWeight: 'bold', marginBottom: 20
    }
});
