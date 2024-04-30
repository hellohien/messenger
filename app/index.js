import * as React from "react";
import {
  Button,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BasicKeyboardAvoidingView from "../components/BasicKeyboardAvoidingView";
import { screenWidth } from "../constants/layout";

const Stack = createNativeStackNavigator();

const onlineUsers = [{ user: "Chat with a bot" }];
export default function Navigation() {
  const [name, setName] = React.useState("");

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text>{item.user}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <BasicKeyboardAvoidingView>
      <SafeAreaView>
        <View
          style={{
            flex: 1,
            justifyContent: "space-between",
            marginVertical: 40,
          }}
        >
          <View>
            <Text style={styles.logo}>Messenger</Text>
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder="Enter name"
              style={styles.input}
            />
            {/* <View style={styles.onlineNowWrapper}>
              <Text style={{ fontWeight: "600" }}>Online now:</Text>
              <View style={styles.onlineNow}>
                <FlatList
                  data={onlineUsers}
                  renderItem={renderItem}
                  scrollEnabled={false}
                />
              </View>
            </View> */}
          </View>
          <View style={styles.button}>
            <Button
              title="Next"
              color="#fff"
              onPress={() => {}}
              disabled={!name}
            />
          </View>
        </View>
      </SafeAreaView>
    </BasicKeyboardAvoidingView>
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Message">
    //     <Stack.Screen name="Message" component={Message} />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 10,
    padding: 8,
    width: screenWidth * 0.74,
  },
  onlineNowWrapper: {
    marginTop: 16,
  },
  onlineNow: {
    marginVertical: 8,
  },
  button: {
    backgroundColor: "#b61e02",
    width: "100%",
    borderRadius: 16,
    paddingVertical: 4,
  },
  logo: {
    fontSize: 32,
    paddingVertical: "24%",
    alignSelf: "center",
    color: "#b61e02",
    fontWeight: "600",
  },
});
