
import { useState } from 'react';
import {Text, TouchableOpacity, TextInput, View, Image, KeyboardAvoidingView} from 'react-native'
import { ScrollView,  } from 'react-native-gesture-handler';
import { NativeViewGestureHandler } from 'react-native-gesture-handler';
import Logo from '../images/logon.png';
import Background from '../images/background-new-7.png'
import { Ionicons } from '@expo/vector-icons';

const TutorialFirstContainer = (props) => {
    return(
        <View style={{ height: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            <TouchableOpacity onPress={props.setFalconFirstTime} style={{ position: 'absolute', top: 40, right: 30, alignSelf: 'flex-end', backgroundColor: 'gray', marginTop: 10, paddingVertical: 5, paddingHorizontal: 10, borderRadius: 10}}>
                <Text style={{fontSize: 18}}>Skip</Text>    
            </TouchableOpacity>
            <Image source={Logo} style={{width: 70, height: 71}}/>
            <Text style={{fontSize: 25}}>Falcon</Text>
            <View style={{backgroundColor: '#00c3d9', width: '80%', marginVertical: 10, borderRadius: 20}}>
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 20}}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Hello there!</Text>
                    <Text style={{textAlign: 'center', color: 'white'}}>This is Falcon, your personal travel assistant:)</Text>
                    
                    <Image source={Background} style={{width: 250, height: 250}} />
                </View>
            </View>
            <TouchableOpacity onPress={props.switchSecondContainer} style={{ borderRadius: 10, backgroundColor: 'yellow', paddingVertical: 10, paddingHorizontal: 20}}>
                <Text style={{fontSize: 21}}>Continue</Text>    
            </TouchableOpacity>
               
        </View>
    )
}

const TutorialSecondContainer = (props) => {
    return(
        <View style={{ height: '100%', display: 'flex', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'}}>
            
            <Image source={Logo} style={{width: 70, height: 71}}/>
            <Text style={{fontSize: 25}}>Falcon</Text>
            <View style={{backgroundColor: '#00c3d9', width: '80%', marginVertical: 10, borderRadius: 20}}>
                <View style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: 20}}>
                    <Text style={{textAlign: 'center', color: 'white'}}>Hello there!</Text>
                    <Text style={{textAlign: 'center', color: 'white'}}>This is Falcon, your personal travel assistant:)</Text>
                    
                    <Image source={Background} style={{width: 250, height: 250}} />
                </View>
            </View>
            <TouchableOpacity onPress={props.setFalconFirstTime} style={{ borderRadius: 10, backgroundColor: 'yellow', paddingVertical: 10, paddingHorizontal: 20}}>
                <Text style={{fontSize: 21}}>Get started</Text>    
            </TouchableOpacity>
               
        </View>
    )
}


const FalconTutorial = (props) => {

    const [secondContainerSwitch, setSecondContainerSwitch] = useState(false);

    const switchSecondContainer = () => {
        setSecondContainerSwitch(true);
    }
    return(
        <View>
            {secondContainerSwitch 
        ? <TutorialSecondContainer setFalconFirstTime={props.setFalconFirstTime} />
        :<TutorialFirstContainer switchSecondContainer={switchSecondContainer} setFalconFirstTime={props.setFalconFirstTime} />
        }
        </View>
        
        
        
        
    )
}

const FalconChat = () => {
    return(

            <View style={{ display: 'flex', alignItems: 'center', height: '100%'}}>
                
                    <View style={{ height: '10%', display: 'flex', flexDirection: 'row', paddingVertical: 10, alignItems: 'center', backgroundColor: '#00c3d9',width: '100%',marginTop: 40}}>
                        <Image source={Logo} style={{width: 50, height: 51}}/>
                        <Text style={{marginHorizontal: 10, fontSize: 20}}>Falcon</Text>
                        
                    </View>
                    <View style={{height: '75%'}}>
                        
                    </View>
                    <KeyboardAvoidingView style={{ height: '10%', position: 'fixed', width: '100%', paddingVertical: 10,backgroundColor: '#e3e8e5', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <TextInput style={{ backgroundColor: 'white', width: '85%', paddingHorizontal: 20, paddingVertical: 10, borderRadius: 40, fontSize: 18}} placeholder='Send message'/>
                        <Ionicons style={{position: 'absolute', alignSelf: 'flex-end', right: 45}} name='send' size={26}/>
                    </KeyboardAvoidingView>
                    
                    
                
                
            </View>
       
        
    )
}

const Falcon = () => {
    const [firstTime, setFirstTime] = useState(true);

    const setFalconFirstTime = () => {
        setFirstTime(false)
    }

    return(
        
            <View>
                {firstTime? 
                <FalconTutorial setFalconFirstTime={setFalconFirstTime} />
            
                :
                <FalconChat/>
            }
            
            </View>
        
        
        
    )
}

export default Falcon;