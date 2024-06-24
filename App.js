import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import MainAppContainer from './MainAppContainer';
import { useState } from 'react';
import TutorialContainer from './TutorialContainer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'react-native-gesture-handler';
import Login from './screens/Login';
import Signup from './screens/Signup';

const App = () => {
  const [isLoggedin, setIsLoggedin] = useState(true);

  const setLoggedIn = () => {
    setIsLoggedin(true);
    console.log('clicked')
  }

  return (
    <View style={{flex: 1}}>
      {isLoggedin
      ? 
      <Signup/>
      // <MainAppContainer/>
      //<DestinationCard/>
      :
      <GestureHandlerRootView>
        <TutorialContainer setLogin={setLoggedIn} />
      </GestureHandlerRootView>
      
      
      }
      

            
      

 
      
    </View>
  );
}

export default App;

