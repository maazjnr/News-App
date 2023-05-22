import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React from "react";
import ImageBg from "../../Assets/m0stafa_k787-20210904-0004.jpg";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import DataFetch from "../../Hooks/DataFetch";

const API_KEY =
  'https://newsdata.io/api/1/news?apikey=pub_2239027188f79e2e451fa7a2d13c6958564aa&q=business&country=ng '

// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const BreakingNews = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((res) => {
        setData(res.results);
        setLoading(false);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
        setLoading(false);
      });
  }, []);


  return (

      <FlatList
        horizontal
        data={data}
        renderItem={({ item }) => <Image
        source={{uri: `${item.image_url}` }} resizeMode="cover"
         style={{ width: 300, height: 200 }}
       /> }
      />

  );
};

const styles = StyleSheet.create({
  ImageBg: {
    height: 200,
    width: 300,
    margin: 10,
    marginLeft: 0,
    padding: 20,
  },
});

export default BreakingNews;
