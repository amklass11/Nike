import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  ScrollView,
  useState,
} from "react-native";
import { useContext} from "react";
import { ProductProvider } from "./context";
const data = require("../shoes.json");
import ProductContext from "./context";


export default function Home() {
  const { toggleFavorite, favorites} = useContext(ProductContext);



  return (

  
    <View style={styles.HomeBackground}>
      <View style={styles.NavBar}>
        <Image source={require("../Hamburger.png")} />

        <Text style={styles.HeaderText}>Explore</Text>
        <Image source={require("../bag.png")} />
      </View>
      <View style={styles.SearchTab}>
        <TextInput style={styles.SearchBar} placeholder="Search..." />
        <View style={styles.slider}>
          <Image source={require("../sliders.png")} />
        </View>
      </View>
      <ScrollView style={styles.sortBox} horizontal>
        <TouchableOpacity style={styles.sorter}>
          <Text>All Shoes</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sorter}>
          <Text>Outdoor</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sorter}>
          <Text>Tennis</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sorter}>
          <Text>Football</Text>
        </TouchableOpacity>
      </ScrollView>
      <ScrollView horizontal>
        <View style={styles.shoeBox}>
          {data.shoes.map((shoe) => (
            <TouchableOpacity style={styles.card} key={shoe.id}>
             
              <TouchableOpacity
               onPress={() => toggleFavorite(shoe)}
              >
                <Image
                   source={
                    favorites.includes(shoe)
                      ? require('../heart1.png') // Use a filled heart icon for favorited shoes
                      : require('../heart.png') // Use an outline heart icon for non-favorited shoes
                  }
                  style={styles.favoriteIcon}
                />
              </TouchableOpacity>
              <Image source={{ uri: shoe.image_url }} />
              <Text>{shoe.model}</Text>
              <Text>{`$${shoe.price}`}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      <View style={styles.floorCard}>
        <View style={styles.sideLogo}>
          <Text style={styles.Raleway}>Summer Sale</Text>
          <Text style={styles.pop}>15% OFF</Text>
        </View>
        <View>
          <Image source={require("../new.png")} />
          <Image source={require("../nke.png")} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  HomeBackground: {
    display: "flex",
    backgroundColor: "#FFFFFF",
    justifyContent: "space-between",
    marginTop: 50,
    backgroundColor: "#F7F7F9",
  },

  NavBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },

  pop: {
    color: "#674DC5",
    // fontFamily: "future",
    fontSize: 36,
    width: 131,
    height: 37,
  },

  sorter: {
    backgroundColor: "#fff",
    width: 90,
    height: 40,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    marginLeft: 10,
  },

  favoriteIcon: {
    width: 20,
    height: 20,
    position: "absolute",
    top: 10,
    right: 10,
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 201,
    width: 157,
    marginLeft: 10,
  },
  sideLogo: {
    width: 200,
    fontSize: 24,
    fontWeight: "bold",
  },
  shoeBox: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
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

  SearchBar: {
    backgroundColor: "white",
    width: 269,
    height: 48,
    borderRadius: 15,
    paddingTop: 12,
    paddingRight: 14,
    paddingBottom: 12,
    paddingLeft: 14,
  },
  SearchTab: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
  },
  slider: {
    backgroundColor: "#0D6EFD",
    borderRadius: 50,
    height: 52,
    width: 52,
    justifyContent: "center",
    alignItems: "center",
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

  input: {
    height: 56,
    width: 70,
    borderRadius: 15,
    overflow: "hidden",
    backgroundColor: "#F5F5F5",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 16,
  },

  sortBox: {
    marginTop: 20,
    padding: 10,
    marginLeft: 10,
  },
  floorCard: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 10,
    marginTop: 10,
    backgroundColor: "#fff",
    borderRadius: 15,
    height: 95,
    width: 335,
    marginLeft: 25,
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
