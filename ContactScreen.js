import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ContactScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>📞 Contact Page</Text>
            <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, marginBottom: 20 },
});
