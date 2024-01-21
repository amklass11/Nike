import { StyleProp } from "react-native"
import { StyleSheet,View,Text } from "react-native"

export default function Test(){
    return (
        <View style={styles.container}>
        <Text>Test</Text>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
    }
})