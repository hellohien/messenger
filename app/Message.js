// import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
// import { Avatar, Header } from "react-native-elements";
// import { screenHeight, screenWidth } from "../constants/layout";
// import MoreIcon from "../components/icons/MoreIcon";
// import { useState } from "react";
// import BasicKeyboardAvoidingView from "../components/BasicKeyboardAvoidingView";

// const width = screenWidth * 0.88;

// export default function Message({ navigation }) {
//   const [message, setMessage] = useState("");

//   return (
//     <BasicKeyboardAvoidingView>
//       <View style={styles.root}>
//         <View style={styles.container}>
//           <Header
//             containerStyle={{
//               alignSelf: "center",
//               backgroundColor: "#fff",
//             }}
//             leftComponent={
//               <View style={styles.row}>
//                 <Avatar
//                   size={44}
//                   rounded
//                   source={require("../src/assets/images/image-placeholder.jpg")}
//                 />
//                 <Text style={styles.name}>Bot</Text>
//               </View>
//             }
//             rightComponent={<MoreIcon />}
//           />
//           <View style={styles.line} />
//           <View styles={styles.content}>
//             <ScrollView
//               contentContainerStyle={styles.messageWrapper}
//               // ref={flatListRef}
//               // onContentSizeChange={() =>
//               //   flatListRef.current.scrollToEnd({animated: true})
//               // }
//             ></ScrollView>
//             <View style={styles.inputWrapper}>
//               <TextInput
//                 value={message}
//                 onChangeText={(text) => setMessage(text)}
//                 placeholder="Enter message"
//                 style={styles.input}
//               />
//             </View>
//           </View>
//         </View>
//       </View>
//     </BasicKeyboardAvoidingView>
//   );
// }

// const styles = StyleSheet.create({
//   root: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   container: {
//     width: screenWidth * 0.88,
//     alignSelf: "center",
//   },
//   line: {
//     borderBottomColor: "#d3d3d3",
//     borderBottomWidth: 0.5,
//     width: screenWidth,
//     alignSelf: "center",
//   },
//   row: {
//     flexDirection: "row",
//     alignItems: "center",
//   },
//   name: {
//     marginLeft: 14,
//     fontSize: 17,
//   },
//   inputWrapper: {
//     position: "absolute",
//     bottom: 0,
//     backgroundColor: "#fff",
//     alignSelf: "center",
//   },
//   input: {
//     borderWidth: 1,
//     borderColor: "#808080",
//     borderRadius: 10,
//     paddingVertical: 8,
//     alignSelf: "center",
//     borderRadius: 30,
//     borderWidth: 0,
//     backgroundColor: "#F5F5F5",
//     marginTop: 8,
//     paddingRight: 30,
//     paddingLeft: 16,
//     width,
//     height: 40,
//   },
//   messageWrapper: {
//     // backgroundColor: "#F5F5F5",
//     width,
//     alignSelf: "center",
//     height: screenHeight * 0.8,
//   },
// });

import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
  Keyboard,
  Animated,
  KeyboardAvoidingView,
  TextInput,
} from "react-native";
import { Avatar, Header } from "react-native-elements";
import { SafeAreaView } from "react-native-safe-area-context";
import MoreIcon from "../components/icons/MoreIcon";
import { screenWidth } from "../constants/layout";

// import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import { SkypeIndicator, DotIndicator } from "react-native-indicators";
// import Toast from "react-native-toast-message";
// import BasicAlert from "../../components/BasicAlert";
// import MultilineInput from "../../components/Inputs/MultilineInput";
// import PickerSelect from "../../components/PickerSelect";

const Message = ({ navigation }) => {
  const [message, setMessage] = useState("");
  const flatListRef = useRef();
  const [loading, setLoading] = useState(false);

  // const scrollToBottom = () => {
  //   const keyboardDidShowListener = Keyboard.addListener(
  //     "keyboardDidShow",
  //     () => {
  //       flatListRef.current.scrollToEnd({ animated: true });
  //     }
  //   );
  //   return () => {
  //     keyboardDidShowListener.remove();
  //   };
  // };

  const RenderMessages = ({ item, index }) => {
    return (
      <View style={[styles.message, styles.from]}>
        <Paragraph color="black" style={{ fontSize: 17 }}>
          {item.message}
        </Paragraph>
      </View>
      // <View>
      //   {item?.FromId === user.id ? (
      //     <View>
      //       <LinearGradient
      //         locations={[0, 1]}
      //         colors={["#E5E5EA", "#E5E5EA"]}
      //         useAngle={true}
      //         angle={90}
      //         style={[styles.message, styles.from]}
      //       >
      //         <Paragraph color="black" style={{ fontSize: 17 }}>
      //           {item.message}
      //         </Paragraph>
      //       </LinearGradient>
      //       {/* only show read receipt if the last message is yours and read by recepient */}
      //       {messages.length - 1 === index && seenAt && (
      //         <View style={{ alignSelf: "flex-end" }}>
      //           <Paragraph type="p9" style={{ color: "#8E8E93" }}>
      //             Read {formatDate(seenAt, "h:mm A")}
      //           </Paragraph>
      //         </View>
      //       )}
      //     </View>
      //   ) : (
      //     <View>
      //       <LinearGradient
      //         locations={[0, 1]}
      //         colors={["#E83346", "#F65B6C"]}
      //         useAngle={true}
      //         angle={90}
      //         style={[styles.message, styles.to]}
      //       >
      //         <Paragraph color="white" style={{ fontSize: 17 }}>
      //           {item.message}
      //         </Paragraph>
      //       </LinearGradient>
      //     </View>
      //   )}
      // </View>
    );
  };

  return (
    <View style={styles.root}>
      <TouchableOpacity
        style={{ flex: 1 }}
        activeOpacity={1}
        // onPressOut={() => {
        //   setOpenMenu(false);
        // }}
      >
        <View>
          <Header
            containerStyle={styles.header}
            leftComponent={
              <View style={styles.row}>
                {/* <BackButton
                  navigation={navigation}
                  handlePress={
                    route?.params?.screen === "Profile" &&
                    navigation.navigate("View Match Profile", {
                      messages: messages.length > 0 ? true : false,
                    })
                  }
                  style={{ paddingLeft: 0 }}
                /> */}
                <TouchableOpacity style={styles.avatar}>
                  <Avatar
                    size={44}
                    rounded
                    source={require("../src/assets/images/image-placeholder.jpg")}
                  />
                </TouchableOpacity>
                <Text numberOfLines={1} style={styles.name}>
                  Bot
                </Text>
              </View>
            }
            rightComponent={
              <TouchableOpacity style={styles.moreIcon}>
                <MoreIcon color="#FFF" />
              </TouchableOpacity>
            }
          />
        </View>

        <KeyboardAvoidingView
          style={{ flex: 1, backgroundColor: "#F5F5F5" }}
          behavior="padding"
        >
          <View style={styles.content}>
            <ScrollView
              contentContainerStyle={styles.messageWrapper}
              ref={flatListRef}
              onContentSizeChange={() =>
                flatListRef.current.scrollToEnd({ animated: true })
              }
            >
              <View>
                {loading ? (
                  <View style={{ marginTop: "50%" }}>
                    <SkypeIndicator color="#171717" size={30} />
                  </View>
                ) : (
                  <View>
                    {/* {messages.map((item, index) => (
                      <RenderMessages key={index} item={item} index={index} />
                    ))}
                    {isUserTyping && (
                      <View style={styles.typingIndicatorWrapper}>
                        <View style={styles.typingIndicator}>
                          <DotIndicator color="#606367" size={5} count={3} />
                        </View>
                      </View>
                    )} */}
                  </View>
                )}
              </View>
            </ScrollView>

            <View style={styles.inputWrapper}>
              <TextInput
                value={message}
                onChangeText={(text) => setMessage(text)}
                placeholder="Enter message"
                style={styles.input}
              />
              {/* <LabelInput
                placeholder="Type something"
                shiftInput={false}
                placeholderTextColor="#171717"
                value={message}
                onChangeText={(text) => handleInputChange(text)}
                returnKeyType="default"
                blurOnSubmit={true}
                stylings={styles.input}
                icon={
                  <TouchableOpacity
                    style={styles.sendIcon}
                    onPress={sendMessage}
                    disabled={!message}
                  >
                    <MoreIcon/>
                  </TouchableOpacity>
                }
              /> */}
            </View>
          </View>
        </KeyboardAvoidingView>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F5F5F5",
  },
  messageWrapper: {
    backgroundColor: "#F5F5F5",
    paddingVertical: 32,
    paddingBottom: 130,
    width: screenWidth * 0.88,
    alignSelf: "center",
  },
  content: {
    flex: 1,
    width: screenWidth,
    alignSelf: "center",
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    width: screenWidth * 0.7,
    overflow: "hidden",
    left: 24,
  },
  header: {
    backgroundColor: "#b61e02",
    paddingBottom: 16,
  },
  messages: {
    marginTop: 16,
  },
  message: {
    alignSelf: "flex-end",
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
  },
  from: {
    alignSelf: "flex-end",
    borderBottomRightRadius: 0,
  },
  to: {
    alignSelf: "flex-start",
    borderBottomLeftRadius: 0,
  },
  inputWrapper: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    height: 110,
    backgroundColor: "#fff",
    alignSelf: "center",
  },
  input: {
    alignSelf: "center",
    borderRadius: 30,
    borderWidth: 0,
    backgroundColor: "#F5F5F5",
    marginVertical: 8,
    paddingRight: 30,
    paddingLeft: 15,
    height: 48,
    width: screenWidth * 0.88,
  },
  avatar: {
    marginLeft: 10,
    marginRight: 16,
  },
  moreIcon: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 24,
    justifyContent: "center",
  },
  name: {
    fontWeight: "700",
    color: "#fff",
  },
  typingIndicatorWrapper: {
    width: screenWidth * 0.88,
    alignItems: "flex-start",
    marginTop: 12,
  },
  typingIndicator: {
    backgroundColor: "#ececec",
    height: 36,
    paddingHorizontal: 14,
    borderRadius: 34 / 2,
  },
  menuContainer: {
    position: "absolute",
    zIndex: 9999,
    top: -20,
    right: 20,
  },
  closeButton: {
    backgroundColor: "#EBEBF599",
    width: 32,
    height: 32,
    borderRadius: 32 / 2,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Message;
