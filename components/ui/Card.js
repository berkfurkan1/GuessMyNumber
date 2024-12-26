import { StyleSheet,View } from "react-native";
import Colors from "../../constants/colors";

function Card({children}){
    return <View style={styles.card} >{children}</View>
    
}

export default Card;

const styles = StyleSheet.create({
    card:{
            marginTop:40,
            marginHorizontal:24,
            padding:16,
            backgroundColor:Colors.primary800,
            borderRadius:8,
            elevation:8, // shadow on android devices 1-2-3-4-5 şeklinde değer alır ve değer büyüdükçe gölge büyür.
            shadowColor:'black', // shadow color on ios devices
            shadowOffset:{width:0,height:2}, // shadow offset on ios devices.  gölgenin bileşenin hangi yönünde ve ne kadar uzağında görüneceğini kontrol eder.
            shadowOpacity:0.25, // shadow opacity on ios devices.. Bu özellik, gölgenin ne kadar saydam veya opak olacağını kontrol eder. Değer aralığı 0 ile 1 arasındadır; 0 tamamen saydam, 1 ise tamamen opak anlamına gelir.
            shadowRadius:8, // shadow radius on ios devices.. Bu özellik, gölgenin ne kadar geniş olacağını kontrol eder. Değer ne kadar büyük olursa, gölge o kadar geniş olur.
            alignItems:'center',
            justifyContent:'center',
    }
})