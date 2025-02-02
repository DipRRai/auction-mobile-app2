import {
  FlatList,
  StyleSheet,
  View,
  TextInput,
  Text,
  StatusBar,
  Button,
} from "react-native";
import { useState, useEffect } from "react";

//CUSTOM IMPORTS
import AuctionItem from "../components/AuctionItem";
import getProducts from "../utils/apis";

export default function Sales() {
  const [text, onChangeText] = useState("Search on WebAuctions");
  const [products, setProducts] = useState(null);

  const fetchData = async () => {
    try {
      const result = await getProducts();
      setProducts(result);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const DATA = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      title: "First Item",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      title: "Second Item",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      title: "Third Item",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>WebAuctions</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        onFocus={() => onChangeText("")}
      />
      <Button onPress={fetchData} title="Call Database" color="#841584" />
      <FlatList
        style={{ width: "100%" }}
        data={products}
        renderItem={({ item }) => <AuctionItem name={item.name} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingTop: "5%",
    backgroundColor: "#333",
  },
  input: {
    height: 40,
    width: "90%",
    margin: 12,
    borderWidth: 1,
    borderColor: "#fff",
    padding: 10,
    color: "#fff",
  },
  item: {
    backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
