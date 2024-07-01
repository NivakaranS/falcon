
import {Text, StyleSheet, ScrollView, View, Image} from 'react-native'
import Boy from '../images/boy.png'
import { Ionicons } from '@expo/vector-icons'


const Profile = () => {
    return(
        <ScrollView>
            <View>
                <View style={{width: '100%', height: 170,  backgroundColor: '#05ceed'}}>
                    
                </View>
                <View style={{width: '85%', height: 150, backgroundColor: 'gray', borderRadius: 15, position: 'absolute', top: 90, right: 30, left: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{marginLeft: 20}}>
                        <Image source={Boy} style={{width: 90, height: 90}} />
                    </View>
                    <View style={{marginRight: 20, borderRadius: 10, backgroundColor: 'white', width: '60%', padding: 10, }}>
                        <Text style={{fontSize: 20}}>John Doe</Text>
                        <View style={{display: 'flex', flexDirection: 'row'}}>
                            <Ionicons name='earth' size={20} style={{marginRight: 3}}/>
                            <Text>Private</Text>
                        </View>
                    </View>
                    
                </View>
                <View style={{ marginTop: 85, height: 'auto', width: '100%', backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                <Text style={{fontSize: 20, marginBottom: 5}}>Personal information</Text>
                    <View style={{display: 'flex', width: '85%', backgroundColor: 'gray', borderRadius: 10}}>
                        
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>First name</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>John</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Last name</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>Doe</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Date of birth</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>05/16/2000</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Gender</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>Male</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Language skills</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>English, Sinhala</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Country</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>Sri Lanka</Text>
                        </View>
                        

                    </View>
                    <Text style={{fontSize: 20, marginBottom: 5, marginTop: 10}}>Contact information</Text>
                    <View style={{display: 'flex', width: '85%', backgroundColor: 'gray', borderRadius: 10}}>
                        
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Email</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>john.doe@gmail.com</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Mobile</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>+94 76 0015 755</Text>
                        </View>
                        
                        
                        

                    </View>
                    <Text style={{fontSize: 20, marginBottom: 5, marginTop: 10}}>Travel preferences</Text>
                    <View style={{display: 'flex', width: '85%', backgroundColor: 'gray', borderRadius: 10}}>
                        
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Types of travel</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>Adventure</Text> 
                            {/* adventure, luxury, budget */}
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Travel goals</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>Visiting all continents</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Email</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>john.doe@gmail.com</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 17}}>Mobile</Text>
                            <Text style={{fontSize: 15, color: 'white', marginRight: 10}}>0760015755</Text>
                        </View>
                    </View>
                    
                </View>
                
                
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({

})

export default Profile; 