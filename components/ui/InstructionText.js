import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

function InstructionText({children, style}){ // bu style sayesinde bu componente dışarda kullanırken yeni style özellikleri atayabiliriz.
    return <Text style={[styles.instructionText, style]}>{children}</Text>
}

export default InstructionText;

const styles = StyleSheet.create({
    instructionText:{
        fontFamily:'open-sans',
        color:Colors.accent500,
        fontSize:24,
        fontWeight:'bold',
      }
})