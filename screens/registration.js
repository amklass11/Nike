import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Amplify } from "aws-amplify";
import { Auth } from "aws-amplify";
import config from "./src/aws-exports";
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from "@react-navigation/native";
import Otp from "./otp";


Amplify.configure(config);
const Stack = createStackNavigator();
navigation =  useNavigation();

export default function App() {
  // Define and initialize the formData state to store user input.
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });
  const handleSignUpSuccess = () => {
    // Navigate to the confirmation screen upon successful sign-up
    navigation.navigate('Otp');
  };

  // Destructure properties from the formData state.
  const { username, email, password } = formData;

  // Handle input changes in the form fields.
  const handleInputChange = (name, value) => {
    // Update the formData state by spreading the existing data and updating the field specified by "name."
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle user sign-up.
  const signUp = async () => {
    try {
      await Auth.signUp({
        username: formData.email, // Use the email as the username
        password: formData.password,
        attributes: {
          name: formData.username, // additional attributes are stored in the user pool
        },
      });
      handleSignUpSuccess();
      // You may want to navigate to a success screen or perform other actions here.
    } catch (error) {
      console.error('Error signing up:', error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Register Account</Text>
        <Text style={styles.HeaderParagraph}>
          Fill in your details or continue with social media
        </Text>
      </View>

      <View>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Your Name</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => handleInputChange("username", text)} // Use onChangeText to update the "username" property in formData
            placeholder="xxxxxxxxxx"
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.formLabel}>Email Address</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => handleInputChange("email", text)} // Use onChangeText to update the "email" property in formData
            placeholder="xyz@gmail.com"
          />
        </View>

        <View style={styles.form}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formInput}
            onChangeText={(text) => handleInputChange("password", text)} // Use onChangeText to update the "password" property in formData
            placeholder="Password"
            secureTextEntry
          />
        </View>
        <View style={styles.form}>
          <TouchableOpacity
            style={styles.login}
            onPress={signUp} // Use onPress to trigger the signUp function
          >
            <Text style={styles.white}>Sign Up</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.omniauth}>
            <Image source={require("./google.png")} />
            <Text style={styles.gtext}>Sign Up with Google</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    marginTop: 50,
  },
  Header: {
    justifyContent: "center",
    alignItems: "center",
    padding: 6,
    marginTop: 50,
  },
  HeaderText: {
    color: "black",
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Raleway-Regular",
    padding: 10,
  },
  HeaderParagraph: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    // fontFamily: "Poppins",
    color: "#707B81",
  },

  white: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    // fontFamily: "Poppins",
  },

  paragraph: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  gtext: {
    marginLeft: 10,
  },
  carosel: {
    marginTop: 20,
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  formLabel: {
    fontFamily: "Raleway regular",
    fontSize: 16,
    fontWeight: 500,
    marginTop: 10,
    justifyContent: "flex-start",
    marginRight: 230,
    marginBottom: 10,
  },
  formInput: {
    backgroundColor: "#F5F5F5",
    width: 335,
    height: 48,
    borderRadius: 15,
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
  },
  login: {
    width: 335,
    height: 48,
    borderRadius: 14,
    backgroundColor: "#0D6EFD",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginTop: 10,
  },

  omniauth: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#F7F7F9",
    width: 335,
    height: 48,
    borderRadius: 14,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  button: {
    backgroundColor: "#fff",
    width: 335,
    height: 50,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
});
