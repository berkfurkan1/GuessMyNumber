import { useState } from 'react';
import { StyleSheet, Text, View,ImageBackground ,SafeAreaView} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import Colors from './constants/colors';
import GameOverScreen from './screens/GameOverScreen';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRounds, setGuessNumber] = useState(0);

  const [ fontsLoaded] = useFonts ({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })

  if(!fontsLoaded){
    return <AppLoading />;
  }

  function pickedNumberHandler(pickedNumber){
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(numberOfRounds){
    setGameIsOver(true);
    setGuessNumber(numberOfRounds);
  }

  function startNewGameHandler(){
    setUserNumber(null);
    setGuessNumber(0);
  };

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if(userNumber){
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />;
  }
  if(gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onStartNewGame={startNewGameHandler} />;
  }

  return (
    <LinearGradient colors={[Colors.primary700,Colors.accent500]} style={styles.rootScreen} >
      <ImageBackground 
      style={styles.rootScreen} 
      source={require('./assets/image/background.png')}
      resizeMode='cover'
      imageStyle={styles.backgroundImage} >
      {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen:{
    flex:1,
    
  },
  backgroundImage:{
    opacity:0.15,
  }
});
