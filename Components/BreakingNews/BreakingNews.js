import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React from "react";
import ImageBg from "../../Assets/m0stafa_k787-20210904-0004.jpg";
import { ScrollView } from "react-native-gesture-handler";
import { useEffect, useState } from "react";

//https://dribbble.com/shots/20787913-Hoaks-News-App?utm_source=Clipboard_Shot&utm_campaign=Bimgraph&utm_content=Hoaks%20-%20News%20App&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=Bimgraph&utm_content=Hoaks%20-%20News%20App&utm_medium=Social_Share

const apiUrl = "https://jsonplaceholder.typicode.com/posts";

const BreakingNews = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      fetch(apiUrl)
        .then((response) => response.json())
        .then((res) => {
          setData(res);
          setLoading(false);
        })
        .catch((error) => {
          console.log("Error fetching data:", error);
          setLoading(false);
        });
    }, []);

  return (
    <View>
      {loading ? (
        <Text>...Loading</Text>
      ) : (
        data.map((post) => (
          <View>
            <Text>{post.body}</Text>
          </View>
        ))
      )}
      <TouchableOpacity>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <ImageBackground
            imageStyle={{ borderRadius: 15 }}
            source={ImageBg}
            style={styles.ImageBg}
          >
            <Text>Hello</Text>
          </ImageBackground>

          <ImageBackground
            imageStyle={{ borderRadius: 15 }}
            source={ImageBg}
            style={styles.ImageBg}
          >
            <Text>Hello</Text>
          </ImageBackground>

          <ImageBackground
            imageStyle={{ borderRadius: 15 }}
            source={ImageBg}
            style={styles.ImageBg}
          >
            <Text>Hello</Text>
          </ImageBackground>
        </ScrollView>
      </TouchableOpacity>
    </View>
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
