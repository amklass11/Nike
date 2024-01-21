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

export default function Otp() {
  return (
  
    <View style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.HeaderText}>Verification</Text>
        <Text style={styles.HeaderParagraph}>
        Enter your code to Verify your account
        </Text>
      </View>

      
      <View>
        <View style={styles.form}>
          <Text style={styles.formLabel}>Email</Text>
          <View style={styles.otp}>
      <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
      <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
      <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
      <TextInput style={styles.input} maxLength={1} keyboardType="numeric" />
    </View>

    
        </View>
     </View>
      
      

      
        <View style={styles.form}>
            <TouchableOpacity style={styles.login}>
                  <Text style={styles.white}>Verify</Text>
                    </TouchableOpacity>
      
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
    padding:10,
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
  },flexDirection: "row",

  otp: {
    display: "flex",
    flexDirection: "row",
  },

  input: {
    height: 56,
    width:70,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 16,
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
