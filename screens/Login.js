
import {View, Text, Image, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import Logo from '../images/logon.png'
import Google from '../images/google.png';
import Facebook from '../images/facebook-new.png';
import Apple from '../images/apple.png';
import { Feather } from '@expo/vector-icons';

const Login = () => {
    return(
        <View style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
            
            <View style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
                <Image source={Logo} style={{height: 71, width: 70}} />
                <Text style={{fontSize: 30, fontFamily: 'Roboto', marginTop: 5}}>Welcome back:)</Text>
                <View style={styles.line}></View>
                
                <TextInput 
                    placeholder='Username '
                    style={{backgroundColor: '#dbd7d7', borderRadius: 10,  width: '80%', paddingVertical: 10, paddingHorizontal: 20, fontSize: 20}}
                />
                <TextInput 
                    placeholder='Password'
                    style={{backgroundColor: '#dbd7d7', borderRadius: 10, marginVertical: 20, width: '80%', paddingVertical: 10, paddingHorizontal: 20, fontSize: 20}}
                />
                <TouchableOpacity style={{backgroundColor: '#ffe100', borderRadius: 10, width: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingVertical: 10}}>
                    <Text style={{fontSize: 20}}>Login</Text>
                </TouchableOpacity>
                <View style={{marginTop: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                    <Text >Don't have an account? </Text>
                    <TouchableOpacity><Text style={{color: 'blue'}}>Create account</Text></TouchableOpacity>
                </View>
                
                <View style={styles.line}></View>
                <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '50%', alignItems: 'center'}}>
                    
                    <Image 
                        source={Apple}
                        style={{width: 55, height: 55}}
                    />
                    <Image 
                        source={Google}
                        style={{width: 50, height: 50}}
                        
                    />
                    
                    <Image 
                        source={Facebook}
                        style={{width: 50, height: 50}}
                    />
                </View>
                <View style={{marginTop: 20}}>
                    <Text>&copy; Polaris Inc.</Text>
                </View>
            </View>
            
        </View>
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

export default Login;