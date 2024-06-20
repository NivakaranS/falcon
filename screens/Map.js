import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';
import MapView from 'react-native-maps';
import * as Location from 'expo-location';
import { Marker } from 'react-native-maps';
import { GOOGLE_MAPS_API_KEY } from '../config';

const Map = () => {
    const [currentLocation, setCurrentLocation] = useState(null);
    const [searchText, setSearchText] = useState('');

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

    const handleSearchChange = (text) => {
        setSearchText(text);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchInput}
                placeholder="Search here"
                value={searchText}
                onChangeText={handleSearchChange}
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
        
                
                
    }
});

export default Map; 