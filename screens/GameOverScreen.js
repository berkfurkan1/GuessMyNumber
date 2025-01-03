import { Text, View, StyleSheet,  Image} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import Title from "../components/ui/Title";
import PrimaryButton from "../components/ui/PrimaryButton";

function GameOverScreen({roundsNumber, userNumber, onStartNewGame}){
    return(
        <View style={styles.rootContainer}>
            <Title>Game Over</Title>
            <View style={styles.imageContainer} >
                <Image style={styles.image} source={require('../assets/image/success.png')} />
            </View>
            <Text style={styles.summaryText} >Your phone needed 
                <Text style={styles.highLights} > {roundsNumber} </Text> 
                rounds to guess the number 
                <Text style={styles.highLights} > {userNumber} </Text>  . 
            </Text>
            <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
        </View>
    )
};

export default GameOverScreen;

const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        padding:24,
        justifyContent:'center',
        alignItems:'center',
    },
    imageContainer:{
        width:300,
        height:300,
        borderRadius:150,
        borderWidth:3,
        borderColor:Colors.primary800,
        overflow:'hidden',
        margin:50,
    },
    image:{
        width:'100%',
        height:'100%'
    },
    summaryText:{
        fontFamily:'open-sans',
        fontSize:24,
        textAlign:'center',
        marginBottom:24,
    },
    highLights:{
        fontFamily:'open-sans-bold',
        color:Colors.primary500,
    },
    
})

