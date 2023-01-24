import {
  StyleSheet,
  ActivityIndicator,
  Text,
  View,
  FlatList,
} from "react-native";
import React from "react";
import useFetch from "./useFetch";

export default () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  console.log(url);

  const { loading, error, data = [] } = useFetch(url);
  if (error) return <View>Error!</View>;
  if (loading)
    return (
      <View style={[styles.container, styles.horizontal]}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );

  return (
    <View style={styles.container}>
      <View>
        <Text>Using for this project</Text>
        
      </View>
      <FlatList
        data={data}
        renderItem={({ item: { id, email }, index }) => {
          return (
            <View>
              <Text>
                {id} - {email}
              </Text>
            </View>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
});
