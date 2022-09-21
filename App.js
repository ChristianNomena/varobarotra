import React from "react";
import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.searchWrapper}>
          <Text>Search</Text>
        </View>
        <View style={styles.listWrapper}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  searchWrapper: {
    backgroundColor: "darkgreen",
    padding: 16,
  },
  listWrapper: {
    flex: 1,
    backgroundColor: "darkblue",
    padding: 16,
  },
});
