import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  StatusBar,
} from "react-native";

const Home = () => {
  return (
    <>
      {/* Configuring StatusBar */}
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <SafeAreaView>
        <Text>welcome to kraftin</Text>
      </SafeAreaView>
    </>
  );
};

export default Home;
