import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  Button,
} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Hello Again!</Text>
        <Text style={styles.HeaderParagraph}>
          Fill your details or continue with social media
        </Text>
      </View>

      <View>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Email Address</Text>
          <TextInput style={styles.formInput} placeholder="xyz@gmail.com" />
        </View>

        <View style={styles.form}>
          <Text style={styles.formLabel}>Password</Text>
          <TextInput
            style={styles.formInput}
            placeholder="Password"
            secureTextEntry
          />
        </View><View style={styles.form}>
        <TouchableOpacity style={styles.login}>
          <Text style={styles.white}>Sign in</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.omniauth}>
          <Image source={require("./google.png")} />
          <Text style={styles.gtext}>Sign in with Google</Text>
        </TouchableOpacity>

        </View>
        

     
      </View>

      {/* <Text style={styles.footer}>Already Have Account? Log In</Text> */}
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
    padding:10,
  },
  HeaderParagraph: {
    color: "black",
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    fontFamily: "Poppins",
    color: "#707B81",
  },

  white: {
    color: "white",
    fontSize: 15,
    textAlign: "center",
    padding: 10,
    fontFamily: "Poppins",
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
