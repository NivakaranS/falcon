
import {Text, StyleSheet, ScrollView, View, Image} from 'react-native'
import Boy from '../images/boy.png'
import { Ionicons } from '@expo/vector-icons'


const Profile = () => {
    return(
        <ScrollView>
            <View>
                <View style={{width: '100%', height: 170, backgroundColor: '#05ceed'}}>
                    
                </View>
                <View style={{width: '85%', height: 150, backgroundColor: 'gray', borderRadius: 15, position: 'absolute', bottom: 115, right: 30, left: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
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
                <View style={{ marginTop: 85, height: 100, width: '100%', backgroundColor: 'transparent', display: 'flex', alignItems: 'center'}}>
                    <View style={{display: 'flex', width: '85%', backgroundColor: 'gray', borderRadius: 10}}>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 20}}>Name</Text>
                            <Text style={{fontSize: 20}}>John Doe</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 20}}>Email</Text>
                            <Text style={{fontSize: 20}}>john.doe@gmail.com</Text>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 10, justifyContent: 'space-between'}}>
                            <Text style={{fontSize: 20}}>Mobile</Text>
                            <Text style={{fontSize: 20}}>0760015755</Text>
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