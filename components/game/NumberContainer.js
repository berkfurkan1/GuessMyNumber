import { StyleSheet,View, Text } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({children}){
    return(
        <View style={styles.container} >
            <Text style={styles.numberText} >{children}</Text>
        </View>
    );
};

export default NumberContainer;

const styles = StyleSheet.create({
   container:{
        alignItems:'center',
        justifyContent:'center',
        borderWidth:4,
        borderColor:Colors.accent500,
        borderRadius:10,
        padding:24,
        margin:24,
   }, 
   numberText:{
    color : Colors.accent500,
    fontSize:36,
    //fontWeight:'bold',
    fontFamily:'open-sans-bold',
   },
})