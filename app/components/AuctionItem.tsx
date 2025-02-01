import { View, StyleSheet, Text } from 'react-native';

type Props = {
    name: string;
};

export default function AuctionItem({ name }: Props) {
    return (
        <View style={styles.listing}>
            <Text style={{ color: '#fff' }}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    listing: {
        backgroundColor: '#121110',
        width: '100%',
        height: 170,
        marginBottom: 10,
        textAlign: 'center',
    }
})
