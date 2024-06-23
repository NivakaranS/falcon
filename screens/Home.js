
import { StyleSheet,Text, ScrollView, View, Image, TextInput, Button, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';
import DestinationPic1 from '../destinationImages/destination-picture.jpg';
import DestinationPic2 from '../destinationImages/destination-picture2.webp';
import DestinationPic3 from '../destinationImages/destination-picture3.webp';
import DestinationPic4 from '../destinationImages/destination-picture4.jpg';
import Background from '../images/background-new-7.png';
import { Ionicons } from '@expo/vector-icons';
import Boy from '../images/boy.png'

const Home = () => {
    return(
        <ScrollView style={{backgroundColor: 'white'}} >
            <View style={{backgroundColor: '#05ceed', borderBottomLeftRadius: 50, borderBottomRightRadius: 50}}>
                <View style={{marginTop: 35, marginHorizontal: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <Text style={{fontSize:20}}>Hi Stark,</Text>
                    <Image source={Boy} style={{width: 48, height: 48}} />
                    
                </View>
                <Text style={{marginHorizontal: 20, fontSize: 40}}>Where do you want to go?</Text>
                <TextInput placeholder='Search here' style={{marginHorizontal: 20, fontSize: 19, backgroundColor: 'white', paddingHorizontal: 25, paddingVertical: 10, borderRadius: 30, marginTop: 10}}/>
                <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                    <View style={{paddingHorizontal: 20, width: '50%'}}>
                        <Text style={{fontSize: 22, textAlign: 'center'}} >Explore Sri Lanka with us</Text>
                    </View>
                    
                    <Image source={Background} style={{width: '50%', borderBottomRightRadius: 50, height: 200}} />
                </View>
                
            </View>
            <Text style={{marginHorizontal: 30, marginVertical: 10, fontSize: 26}}>Explore cities</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={{ marginLeft: 30 , display: 'flex', flexDirection: 'row'}}>
                    
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>All</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Popular</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Trending</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Highly rated</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnContainer}>
                        <Text style={styles.btnText}>Highly rated</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <View style={styles.destinationCardsContainer}>
                    <View style={styles.destinationCard}>
                        <View style={{backgroundColor: 'blue', width: '100%', height: '75%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>

                        </View>
                        <View style={{backgroundColor: 'gray', width: '100%', height: '25%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{marginLeft: 10, fontSize: 16}}>Colombo</Text>
                            <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
                                <Ionicons name='star' size={20} color='orange'style={{marginRight: 5}}/>
                                <Text>4.5</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.destinationCard}>
                        <View style={{backgroundColor: 'blue', width: '100%', height: '75%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>

                        </View>
                        <View style={{backgroundColor: 'gray', width: '100%', height: '25%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{marginLeft: 10, fontSize: 16}}>Moratuwa</Text>
                            <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
                                <Ionicons name='star' size={20} color='orange'style={{marginRight: 5}}/>
                                <Text>4.2</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.destinationCard}>
                        <View style={{backgroundColor: 'blue', width: '100%', height: '75%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>

                        </View>
                        <View style={{backgroundColor: 'gray', width: '100%', height: '25%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{marginLeft: 10, fontSize: 16}}>Ella</Text>
                            <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
                                <Ionicons name='star' size={20} color='orange'style={{marginRight: 5}}/>
                                <Text>4.0</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.destinationCard}>
                        <View style={{backgroundColor: 'blue', width: '100%', height: '75%', borderTopLeftRadius: 20, borderTopRightRadius: 20}}>

                        </View>
                        <View style={{backgroundColor: 'gray', width: '100%', height: '25%', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                            <Text style={{marginLeft: 10, fontSize: 16}}>Kotahena</Text>
                            <View style={{display: 'flex', flexDirection: 'row', marginRight: 10}}>
                                <Ionicons name='star' size={20} color='orange'style={{marginRight: 5}}/>
                                <Text>4.3</Text>
                            </View>
                        </View>
                    </View>
                </View>
                
            </ScrollView>
            
            
        </ScrollView>
    )
}

export default Home; 

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: 'gray',
        borderRadius: 10,
        paddingHorizontal: 10,
        paddingVertical: 5,
        marginRight: 5
    },
    btnText: {
        fontSize: 16, 
    },
    destinationCard: {
        height: 200,
        width: 200,
        borderRadius: 20,
        backgroundColor: 'gray',
        marginRight: 10,
        marginVertical: 10,
        display: 'flex',
        flexDirection: 'column'
    },
    destinationCardsContainer: {
        marginLeft: 30,
        display: 'flex',
        flexDirection: 'row',
        
    }
}) 