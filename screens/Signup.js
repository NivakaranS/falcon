import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput, ScrollView} from 'react-native';
import Logo from '../images/logon.png'
import Google from '../images/google.png';
import Facebook from '../images/facebook-new.png';
import Apple from '../images/apple.png';
import { Feather } from '@expo/vector-icons';

const Signup = () => {
    return(
        <ScrollView 
        style={{flex: 1, display: 'flex', }}
        contentContainerStyle={
            {
                alignItems: 'center', justifyContent: 'center'
                
            }
        }
        >
            
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Image source={Logo} style={{height: 71, width: 70}} />
                <Text style={{fontSize: 30, fontFamily: 'Roboto', marginTop: 5}}>Create an account</Text>
                <View style={styles.line}></View>
                <Text style={{alignSelf: 'flex-start', fontSize: 20, color: 'gray', marginLeft: 50, marginBottom: 10}}>Personal information</Text>
                <TextInput 
                    placeholder='First name'
                    style={{backgroundColor: '#dbd7d7', borderRadius: 10, marginVertical: 10, width: '80%', paddingVertical: 10, paddingHorizontal: 20, fontSize: 20}}
                />
                <TextInput 
                    placeholder='Last name'
                    style={{backgroundColor: '#dbd7d7', borderRadius: 10, marginVertical: 10, width: '80%', paddingVertical: 10, paddingHorizontal: 20, fontSize: 20}}
                />
                <TextInput 
                    placeholder='Gender'
                    style={{backgroundColor: '#dbd7d7', borderRadius: 10, marginVertical: 10, width: '80%', paddingVertical: 10, paddingHorizontal: 20, fontSize: 20}}
                />
                <TextInput 
                    placeholder='Date of birth'
                    style={{backgroundColor: '#dbd7d7', borderRadius: 10, marginVertical: 10, width: '80%', paddingVertical: 10, paddingHorizontal: 20, fontSize: 20}}
                />
                <TouchableOpacity style={{backgroundColor: '#ffe100', borderRadius: 10, width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                    <Text style={{fontSize: 20}}>Continue</Text>
                </TouchableOpacity>
                <View style={{marginTop: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text >Already have an account? </Text>
                    <TouchableOpacity><Text style={{color: 'blue'}}>Login</Text></TouchableOpacity>
                </View>
                
                <View style={styles.line}></View>
                
                <View style={{marginTop: 20}}>
                    <Text>&copy; Polaris Inc.</Text>
                </View>
            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    line: {
        height: 1,
        width: '90%',
        backgroundColor: 'black',
        marginVertical: 30
    }
})

export default Signup;