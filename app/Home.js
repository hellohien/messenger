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
import BasicKeyboardAvoidingView from "../components/BasicKeyboardAvoidingView";
import { screenWidth } from "../constants/layout";
import LayoutWrapper from "../components/LayoutWrapper";

export default function Home({ navigation }) {
  const [name, setName] = React.useState("");

  return (
    <BasicKeyboardAvoidingView>
      <LayoutWrapper>
        <View style={styles.container}>
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
              onPress={() => navigation.navigate("Online Users")}
              // disabled={!name}
            />
          </View>
        </View>
      </LayoutWrapper>
    </BasicKeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 10,
    padding: 8,
    width: screenWidth * 0.74,
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
