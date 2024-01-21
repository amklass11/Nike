// NextPageScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const NextPageScreen = () => {
  return (
    <View style={styles.container}>
    <Svg width={157} height={130} viewBox="0 0 157 130" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path fill-rule="evenodd" clip-rule="evenodd" d="M78.4823 20.2931L51.4201 27.3814C41.863 29.7475 33.503 32.899 25.4471 30.1402C14.4966 25.4081 14.6929 13.0968 22.8567 0C8.42284 11.9186 -17.5502 50.0308 17.5777 53.8793C22.0521 54.4683 30.0196 52.8975 38.674 49.2552L78.4823 32.9088L157 0.785412L88.2357 17.7307L78.4823 20.2931Z" fill="#FFF6F2" />
      <Path d="M13.9333 85.36V115H4.96332V68.85H12.1133L35.9683 99.27V68.915H44.9383V115H37.4633L13.9333 85.36ZM54.5385 115V68.85H63.5085V115H54.5385ZM73.1371 115V68.915H82.1071V90.82L101.477 68.85H111.357L93.6771 89.325L112.462 115H102.322L87.9571 95.11L82.1071 101.22V115H73.1371ZM148.664 107.135V115H116.619V68.85H148.079V76.715H125.589V87.83H145.024V95.11H125.589V107.135H148.664Z" fill="white" />
    </Svg>
  </View>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#0D6EFD', // You can change the background color as needed
    },
  });

export default NextPageScreen;
