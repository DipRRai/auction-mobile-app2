import { Image, StyleSheet, View, TextInput, Text } from 'react-native';
import { useState, useEffect } from 'react';

//CUSTOM IMPORTS
import AuctionItem from '../components/AuctionItem';

const url = 'http://localhost:3000';

async function getProducts() {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data);
    return data
}

export default function Sales() {
    const [text, onChangeText] = useState('Search on WebAuctions');
    const [products, setProducts] = useState(null);

    return (
        <View style={styles.container}>
            <Text style={{color: "#fff"}}>WebAuctions</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
                onFocus={() => onChangeText('')}
            />
            <AuctionItem name="Hello"/>
            <AuctionItem name="Hello"/>
            <AuctionItem name="Hello"/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '5%',
        backgroundColor: '#333',
    },
    input: {
        height: 40,
        width: '90%',
        margin: 12,
        borderWidth: 1,
        borderColor: '#fff',
        padding: 10,
        color: '#fff',
    },
});
