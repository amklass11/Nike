import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image, Text, ImageBackground, TouchableOpacity} from "react-native";


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.ShoeBox}> 
        <Image source={require("./Shoe3.png")} />
        <Text style={styles.JText}>You Have the Power To</Text>
        <Text style={styles.paragraph} >There Are Many Beautiful And Attractive Plants To Your Room
</Text>
        <Image style={styles.carosel} source={require("./final.png")} />


      </View>
      <View>
        <TouchableOpacity style={styles.button}>
          <Text>Next</Text>
          </TouchableOpacity>
      </View>
     
  

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
  JText: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    
  },
  ShoeBox: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  paragraph: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    
  
  },
  carosel: {
    marginTop: 20,
  },
  button: {
    
    backgroundColor: "#fff",
    width:335,
    height: 50,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center",
    marginTop:20,


  }
});
