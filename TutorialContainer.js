import { View, Text, StyleSheet, ImageBackground } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import React from "react";
import Background from './images/background-new-5.jpg'
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';

const FirstTutorialContainer = ({navigation}) => {
    return(
        <View style={styles.tutorialContainer}>
            <ImageBackground
                source={Background}
                style={styles.backgroundImage}
                resizeMode="cover"
              >
                <View >
                    <Text style={styles.firstText}>Discover the best places in Sri Lanka</Text>
                </View>
                <View >
                    <Text style={styles.secondText}>We have got everything you need to go big in 2024</Text>
                </View>
                <TouchableOpacity
                    style={styles.startBtn}
                    onPress={() => {
                        navigation.navigate('SecondContainer')
                    }}
                >
                    <Text style={styles.btnText}>Get started</Text>
                </TouchableOpacity>


            </ImageBackground>
            
        </View>
    )
}

const SecondTutorialContainer = ({navigation}, props ) => {
    return(
        <View style={styles.tutorialContainer}>
            <ImageBackground
                source={Background}
                style={styles.backgroundImage}
                resizeMode="cover"
              >
                <View >
                    <Text style={styles.firstText}>Discover the best places in Sri Lanka</Text>
                </View>
                <View >
                    <Text style={styles.secondText}>We have got everything you need to go big in 2024</Text>
                </View>
                <View style={styles.secondTutorialBtnContainer}>
                    <TouchableOpacity
                        style={styles.startBtn}
                        onPress={() => {
                            navigation.navigate('SecondContainer')
                        }}
                    >
                        <Text style={styles.btnText}>Skip</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.startBtn}
                        onPress={() => {
                                props.setLogin
                        }}
                    >
                        <Text style={styles.btnText}>Continue</Text>
                    </TouchableOpacity>

                </View>
                


            </ImageBackground>
        </View>
    )
}

const Stack = createStackNavigator();

export default function TutorialContainer(props) {
    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="FirstContainer" screenOptions={{headerShown: false}}>
                <Stack.Screen 
                name="FirstContainer"
                
                component={FirstTutorialContainer} />
                <Stack.Screen 
                name="SecondContainer" 
                initialParams={{setLogin: props.setLogin}}
                component={SecondTutorialContainer} />
            </Stack.Navigator>
        </NavigationContainer>
        
    )
}


const styles = StyleSheet.create({
    tutorialContainer: {
        flex: 1,
        
    },
    firstText: {
        fontSize: 40,
        marginTop: '20%'
        
        
    },
    backgroundImage: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        
        

    },
    secondText: {
        fontSize: 20,
        textAlign: 'left',
        marginHorizontal: 30,
        marginTop: 10
    },
    startBtn: {
        backgroundColor: 'yellow',
        paddingHorizontal: 20,
        position: 'relative',
        top: 535,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10
    },
    btnText: {
        
        fontSize: 25
    },
    secondTutorialBtnContainer: {
        display: 'flex',
        flexDirection: 'row',
    }
    
    


});