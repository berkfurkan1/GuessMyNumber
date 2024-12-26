import React from 'react';
import { View, Text, StyleSheet, TextInput, Button ,Alert} from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';
import { useState } from 'react';
import  Colors  from '../constants/colors';
import Title from '../components/ui/Title';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Ionicons from '@expo/vector-icons/Ionicons';

function StartGameScreen({onPickNumber}) {
  const [enteredNumber, setEnteredNumber] = useState('');

  function resetInputHandler(){
    setEnteredNumber('');
  };

  function numberInputHandler(enteredText){
    setEnteredNumber(enteredText);
  };
  function confirmInputHandler(){
    const chosenNumber = parseInt(enteredNumber);

    if(isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99 ){
      Alert.alert(
       'Invalid Number!',
       'Number has to be a number between 1 and 99.',
       [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
        
      ) // ilk aldığı uyarı başlığı, sonra uyarı içeriği ve sonrasında uyarı butonu(title: string, message?: string, buttons?: AlertButton[], options?: AlertOptions)
    }
    

    onPickNumber(chosenNumber);
  };
  return (
  <View style={styles.rootContainer} >
    <Title>Guess My Number</Title>
    <Card>
      <InstructionText>Enter a Number</InstructionText>
      <TextInput style={styles.numberInput} 
                 keyboardType='number-pad'
                 autoCapitalize='none'
                 autoCorrect={false}
                 maxLength={2}
                 value={enteredNumber}
                 onChangeText={numberInputHandler}
                 />
        <View style={styles.buttonsContainer} >
          <View style={styles.buttonContainer} >
            <PrimaryButton onPress={resetInputHandler} ><Ionicons name="remove-circle-outline" size={24} color="white" /></PrimaryButton>
          </View>
          <View style={styles.buttonContainer} >
            <PrimaryButton onPress={confirmInputHandler} ><Ionicons name="checkmark-circle-outline" size={24} color="white" /></PrimaryButton>
          </View>
        </View>

    </Card>
  </View>
  );
};

export default StartGameScreen;


const styles = StyleSheet.create({
    rootContainer:{
      flex:1,
      marginTop:80,
      alignItems:'center',
    },
    numberInput:{
        height:50,
        width:50,
        fontSize:32,
        borderBottomColor:Colors.accent500,
        borderBottomWidth:2,
        color:Colors.accent500,
        marginVertical:8,
        fontWeight:'bold',
        textAlign:'center',
    },
    buttonsContainer:{
      flexDirection:'row',
    },
    buttonContainer:{
      flex:1,    },
    
});