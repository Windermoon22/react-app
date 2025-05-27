import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>🏠 Home Page</Text>
            <Button title="Go to About" onPress={() => navigation.navigate('About')} />
            <Button title="Go to Contact" onPress={() => navigation.navigate('Contact')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, marginBottom: 20 },
});
