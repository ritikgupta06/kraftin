import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Us</Text>

      <Text style={styles.description}>
        Welcome to our TaskCode App! We designed this app to help you stay
        organized, track your tasks, and increase productivity. With features
        like task creation, status updates, and easy deletion, our app is your
        go-to companion for managing daily tasks.
      </Text>

      <Text style={styles.description}>
        Whether you're working on personal projects, team collaborations, or
        simple to-do lists, this app has all the tools you need to stay on top
        of your responsibilities.
      </Text>

      {/* Contact Us Button */}
      <TouchableOpacity style={styles.contactButton}>
        <Text style={styles.contactButtonText}>Contact Us</Text>
      </TouchableOpacity>

      {/* Legal Information */}
      <TouchableOpacity style={styles.legalButton}>
        <Text style={styles.legalButtonText}>Privacy Policy</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.legalButton}>
        <Text style={styles.legalButtonText}>Terms of Service</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.6)", // Dark transparent background for content
    borderRadius: 10,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
    textAlign: "center",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 15,
    lineHeight: 22,
  },
  contactButton: {
    backgroundColor: "#4CAF50",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contactButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
  legalButton: {
    backgroundColor: "#FF6347",
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  legalButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "500",
  },
});

export default About;
