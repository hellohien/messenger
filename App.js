import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import HomeScreen from "./app/Home";
import MessageScreen from "./app/OnlineUsers";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Online Users"
          component={MessageScreen}
          options={{ headerTitle: "" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
