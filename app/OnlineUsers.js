import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import LayoutWrapper from "../components/LayoutWrapper";
import { screenHeight } from "../constants/layout";

const onlineUsers = [{ user: "Chat with a bot" }, { user: "Chat with a bot" }];

export default function OnlineUsers({ navigation }) {
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity>
        <Text style={styles.userText}>{item.user}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <LayoutWrapper>
      <View style={styles.container}>
        <View style={styles.onlineUsersContainer}>
          <Text style={styles.onlineUsersText}>Online users:</Text>
          <FlatList
            data={onlineUsers}
            renderItem={renderItem}
            scrollEnabled={false}
            contentContainerStyle={styles.onlineUsers}
          />
        </View>
        <View style={styles.button}>
          <Button
            title="Next"
            color="#fff"
            onPress={() => navigation.navigate("Message")}
            // disabled={!name}
          />
        </View>
      </View>
    </LayoutWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
  onlineUsersText: {
    fontSize: 24,
    marginVertical: 18,
  },
  userText: {
    marginBottom: 12,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#b61e02",
    width: "100%",
    borderRadius: 16,
    paddingVertical: 4,
  },
  onlineUsersContainer: {
    height: screenHeight * 0.7,
  },
  onlineUsers: {
    flexGrow: 1,
  },
});
