import { StyleSheet, Text, View } from "react-native";
import CameraApp from "./screens/components/CameraApp";
// import CameraDemo from "./screens/components/CameraDemo";
// import { NavigationContainer, StackActions } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import Home from "./screens/Home";
// import ProjectList from "./screens/ProjectList";


// const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <NavigationContainer>
    //   <Stack.Navigator>
    //     <Stack.Screen name="Home" component={Home}  />
    //     <Stack.Screen
    //       name="ProjectList"
    //       component={ProjectList}
    //       options={({ route }) => {
    //         return {
    //           title: route.params.title,
    //           headerStyle: {
    //             backgroundColor: route.params.color,
    //             headerTintColor: "white",
    //           },
    //         };
    //       }}
    //     />
        
    //   </Stack.Navigator>
    // </NavigationContainer>
    <View style = {styles.container}>
    
      <CameraApp />
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
