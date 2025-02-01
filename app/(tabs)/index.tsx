import { FlatList, StyleSheet, View, TextInput, Text, Button } from "react-native";
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

  useEffect(() => {
    if (products !== null) {
      console.log(products);
    }
  }, [products]);

  function parseData() {}

  return (
    <View style={styles.container}>
      <Text style={{ color: "#fff" }}>WebAuctions</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        onFocus={() => onChangeText("")}
      />
      <Button
        onPress={fetchData}
        title="Call Database"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <AuctionItem name="Hello" />
      <AuctionItem name="Hello" />
      <AuctionItem name="Hello" />
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
});
