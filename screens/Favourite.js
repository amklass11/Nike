import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useProduct } from "./context";

const FavoriteScreen = () => {
  const { favorites, removeFromFavorites } = useProduct();

  const handleRemoveFromFavorites = (item) => {
    removeFromFavorites(item);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Favorites</Text>
      <ScrollView style={styles.favoriteContainer}>
        {favorites.map((item) => (
          <View style={styles.favoriteItem} key={item.id}>
            <TouchableOpacity onPress={() => handleRemoveFromFavorites(item)}>
              {/* Heart Icon for Unfavoriting */}
              <Image source={require('../heart1.png')} style={styles.favoriteHeart} />
            </TouchableOpacity>
            <Image source={{ uri: item.image_url }} style={styles.favoriteImage} />
            <Text style={styles.favoriteModel}>{item.model}</Text>
            <Text style={styles.favoritePrice}>{`$${item.price}`}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F9",
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  favoriteContainer: {
    flex: 1,
  },
  favoriteItem: {
    marginBottom: 20,
  },
  favoriteHeart: {
    width: 20,
    height: 20,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  favoriteImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  favoriteModel: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
  favoritePrice: {
    fontSize: 16,
    color: "#888",
    marginTop: 5,
  },
});

export default FavoriteScreen;
