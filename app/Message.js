import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { Avatar, Header } from "react-native-elements";
import { screenHeight, screenWidth } from "../constants/layout";
import MoreIcon from "../components/icons/MoreIcon";
import { useState } from "react";
import BasicKeyboardAvoidingView from "../components/BasicKeyboardAvoidingView";

const width = screenWidth * 0.88;

export default function Message({ navigation }) {
  const [message, setMessage] = useState("");

  return (
    <BasicKeyboardAvoidingView>
      <View style={styles.root}>
        <View style={styles.container}>
          <Header
            containerStyle={{
              alignSelf: "center",
              backgroundColor: "#fff",
            }}
            leftComponent={
              <View style={styles.row}>
                <Avatar
                  size={44}
                  rounded
                  source={require("../src/assets/images/image-placeholder.jpg")}
                />
                <Text style={styles.name}>Bot</Text>
              </View>
            }
            rightComponent={<MoreIcon />}
          />
          <View style={styles.line} />
          <View styles={styles.content}>
            <ScrollView
              contentContainerStyle={styles.messageWrapper}
              // ref={flatListRef}
              // onContentSizeChange={() =>
              //   flatListRef.current.scrollToEnd({animated: true})
              // }
            ></ScrollView>
            <View style={styles.inputWrapper}>
              <TextInput
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder="Enter message"
                style={styles.input}
              />
            </View>
          </View>
        </View>
      </View>
    </BasicKeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    width: screenWidth * 0.88,
    alignSelf: "center",
  },
  line: {
    borderBottomColor: "#d3d3d3",
    borderBottomWidth: 0.5,
    width: screenWidth,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  name: {
    marginLeft: 14,
    fontSize: 17,
  },
  inputWrapper: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#808080",
    borderRadius: 10,
    paddingVertical: 8,
    alignSelf: "center",
    borderRadius: 30,
    borderWidth: 0,
    backgroundColor: "#F5F5F5",
    marginTop: 8,
    paddingRight: 30,
    paddingLeft: 16,
    width,
    height: 40,
  },
  messageWrapper: {
    // backgroundColor: "#F5F5F5",
    width,
    alignSelf: "center",
    height: screenHeight * 0.8,
  },
});
