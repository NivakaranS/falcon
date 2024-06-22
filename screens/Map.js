import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from '../config';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const ExploreScreen = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [region, setRegion] = useState(
        {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    )

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });

        })();
    }, []);

    const handlePlaceSelected = (data, details=null) => {
        const {geometry} = details || data;
        const {location} = geometry;

        setRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
        console.log(region);
        console.log(data);

    };


    return (
        <View style={styles.container}>
            
            {currentLocation ? (
                <MapView
                style={styles.map}
                initialRegion={currentLocation}
                googleMapApiKey={GOOGLE_MAPS_API_KEY}
                
            >
                <Marker
                    coordinate={currentLocation}
                    title="You"
                    
                />
                <Marker 
                    coordinate={region}
                />
            </MapView>
            ) : 
            <View>
                <MapView 
                style={styles.map}
                googleMapApiKey={GOOGLE_MAPS_API_KEY}
                />
            </View>
            }
        </View>
    );

};

const TravelScreen = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [region, setRegion] = useState(
        {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }
    )

    useEffect(() => {
        (async () => {
            let {status} = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setCurrentLocation({
                latitude: location.coords.latitude,
                longitude: location.coords.longitude,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421
            });

        })();
    }, []);

    const handlePlaceSelected = (data, details=null) => {
        const {geometry} = details || data;
        const {location} = geometry;

        setRegion({
            latitude: location.lat,
            longitude: location.lng,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        });
        console.log(region);
        console.log(data);

    };


    return (
        <View style={styles.container}>
            <GooglePlacesAutocomplete
                placeholder='Search here'
                onPress={handlePlaceSelected}
                query={
                    {key: GOOGLE_MAPS_API_KEY,
                    language: 'en'}
                }
                styles={{
                    textInput: styles.searchInput
                }}
            />
            {currentLocation ? (
                <MapView
                style={styles.map}
                initialRegion={currentLocation}
                googleMapApiKey={GOOGLE_MAPS_API_KEY}
                
            >
                <Marker
                    coordinate={currentLocation}
                    title="You"
                    
                />
                <Marker 
                    coordinate={region}
                />
            </MapView>
            ) : 
            <View>
                <MapView 
                style={styles.map}
                googleMapApiKey={GOOGLE_MAPS_API_KEY}
                />
            </View>
            }
        </View>
    );

};




const Drawer = createDrawerNavigator();

export default function Map() {
    const [searchQuery, setSearchQuery] = useState('');

    const HeaderLeft = ({ navigation }) => {
        return(
            <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <TouchableOpacity  onPress={() => navigation.toggleDrawer()} style={styles.menuButton}>
                    <Ionicons name='menu' size={32} color="black" />
                </TouchableOpacity>
                <TextInput
                    style={{backgroundColor: 'white', width: 'auto', width: '68%',  paddingVertical: 10, paddingHorizontal: 20, fontSize: 17, borderRadius: 35}}
                    placeholder='Search here'
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                />
                <TouchableOpacity style={styles.filterButton}>
                    <Ionicons name='color-filter-outline' size={30} color="black"/>
                </TouchableOpacity>
            </View>
        )
        
    }

    return(
        <NavigationContainer independent={true}>
            <Drawer.Navigator 
                initialRouteName='Explore'
                screenOptions={({ navigation }) => ({
                    headerLeft: () => <HeaderLeft navigation={navigation}/>,
                    headerTitle: '',
                    headerStyle: {
                        
                        backgroundColor: 'transparent',
                        height: 105
                        
                    }
                })}
                >
                <Drawer.Screen name='Explore' component={ExploreScreen} />
                <Drawer.Screen name='Travel' component={TravelScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    )
} 


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%'
    },
    searchInput: {
        backgroundColor: 'white',
        borderRadius: 30,
        paddingHorizontal:20,
        paddingVertical: 5,
        marginTop: 38,
        marginHorizontal: 20,
        position: 'absolute',
        zIndex: 99,
        width: '90%',
        height: 50,
        fontSize: 17                
                
    },
    headerLeftContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 10,
    },
    menuButton: {
        padding: 8,
        borderRadius: 40,
        marginHorizontal: 8,

        backgroundColor: 'white',
        width: 'auto',

    },
    filterButton: {
        padding: 8,
        borderRadius: 40,
        marginHorizontal: 8,

        backgroundColor: 'white',
        width: 'auto',
    },
    searchInputHeader: {
        height: 50,
        width: 200,
        borderColor: 'gray',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10
    }


});
