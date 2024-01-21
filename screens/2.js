import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity} from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Image style={styles.backgroundIcon} source={require('./icons.png')} /> */}
      <View style={styles.HeadingText}>
        <Text style={styles.WelcomeText}>Welcome to Nike!</Text>
        <Image source={require("./Vector.png")} />
      </View>

      <Image source={require("./shoe.png")} style={styles.backgroundImage} />
      <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Get Started</Text>
              </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",

    flex: 1,
    backgroundColor: "#1483C2",
    alignItems: "center",
    justifyContent: "center",
  },
  WelcomeText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    zIndex: 1,
  },
  HeadingText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 100,
  },
  backgroundIcon: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    height: "100%",
    width: "100%",
    zIndex: -1,
  },
  button: {
    width: 335,
    height: 50,
    backgroundColor: "#fff",
    borderRadius:15,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,


    // marginTop: 10,
    // widrh:400,
    // height: 50,

  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // or 'stretch'
    justifyContent: "center",
    alignContent: "center",
    marginBottom: 100,
  },
  zIndex: -1,
  width: 20,
  height: 20,
});
