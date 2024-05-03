import { SafeAreaView, StyleSheet, View } from "react-native";
import { screenWidth } from "../constants/layout";

const LayoutWrapper = ({ children }) => {
  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    flex: 1,
    alignSelf: "center",
    width: screenWidth * 0.88,
  },
});

export default LayoutWrapper;
