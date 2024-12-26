import React from 'react';
import { Text, View ,StyleSheet,SafeAreaView, Alert,FlatList} from 'react-native';
import Title from '../components/ui/Title'; 
import { useState, useEffect } from 'react';
import NumberContainer from '../components/game/NumberContainer';
import PrimaryButton from '../components/ui/PrimaryButton';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import Ionicons from '@expo/vector-icons/Ionicons';
import GuessLogItem from '../components/game/GuessLogItem';

function generateRandomBetween(min,max,exclude){
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if(rndNum === exclude){
        return generateRandomBetween(min,max,exclude);
    }else {
        return rndNum; 
    }
}

let minBoundary = 1;
let maxBoundary = 100;

function GameScreen({userNumber, onGameOver}){
    const initialGuess = generateRandomBetween(1,100,userNumber);
    const [currentGuess, setCurrentGuess] = useState(initialGuess);
    const [guessRounds, setGuessRounds] = useState([initialGuess]);


    useEffect(()=>{
        if(currentGuess === userNumber){
            onGameOver(guessRounds.length);
        }
    },[ currentGuess, userNumber, onGameOver]);

    useEffect(()=>{
        minBoundary = 1;
        maxBoundary = 100;
    },[])

    function nextGuessHandler(direction){ // direction is either 'lower' or 'greater'
        // kullanıcı sisteme yanlış info verdiğini tespit etme:
        if (direction === 'lower' && currentGuess < userNumber || 
            direction === 'greater' && currentGuess > userNumber){
                Alert.alert('Don\'t Lie!','You know that is wrong...', [{text:'Sorry!',style:'cancel'}]);
                return;
            }


        if (direction === 'lower'){
            maxBoundary = currentGuess; // if the user says the number is lower than the current guess, then the max boundary will be the current guess
        }else {
            minBoundary = currentGuess + 1; // +1 olma sebebi eğer kullanıcı daha önce tahmin edilen sayıyı söylerse, bu sayıyı bir daha tahmin etmemesi için ve min değerin dahil olmasından kayanklı +1 eklendi.
        }
        const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
        setGuessRounds((prevGuessRounds) => [newRndNumber,...prevGuessRounds])
    }
    const guessRoundListLength = guessRounds.length;

    return(
    <View style={styles.screen} >
        <Title> Oppenent's Guess </Title>
        <NumberContainer>{currentGuess}</NumberContainer>
        <Card>
            <InstructionText style={styles.instructionText} >Higher or Lower?</InstructionText>
            <View style={styles.buttonsContainer} >
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'greater')} ><Ionicons name="add" size={24} color="white" /></PrimaryButton>
                </View>
                <View style={styles.buttonContainer}>
                    <PrimaryButton onPress={nextGuessHandler.bind(this,'lower')}  ><Ionicons name="remove" size={24} color="white" /></PrimaryButton>
                </View>
            </View>
        </Card>
        <View style={styles.listContainer} >
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => {
            try {
              return (
                <GuessLogItem
                  roundNumber={guessRounds.length - itemData.index}
                  guess={itemData.item}
                />
              );
            } catch (error) {
              console.error('Error rendering item:', error);
              return null; // Hata durumunda hiçbir şey render etme
            }
          }}
          keyExtractor={(item) => item.toString()}
        />
        </View>
    </View>
    )
    
};

export default GameScreen;

const styles = StyleSheet.create({
    screen:{
        flex:1,
        marginTop:55
        
    },
    instructionText:{
        marginBottom:12,
        
    },
    buttonsContainer:{
        flexDirection:'row',
      },
    buttonContainer:{
        flex:1,    },
    listContainer:{
        flex : 1,
        padding:30,
    },
      
    
});
