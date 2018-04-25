import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import LatLon from  "./latlon.js";
import greenMarkerPin from "./img/green_marker.png";
import redMarkerPin from "./img/red_marker.png";


// Earthquakes in different locations with different magnitudes 

//20 miles from Mexicali, Baja California, Mexico · Apr 22, 10:53 AM 2.7

// const earthquakeLat =  30.8406;
// const earthquakeLon =  -115.2838;
// const earthquakeCat = 2.7;

//The magnitude 6.1 quake hit 43km (27 miles) east of Oaxaca at a depth of 10km at 6.56GMT

// const earthquakeLat =  17.0542;
// const earthquakeLon =  -96.71329;
// const earthquakeCat = 6.7;

// 86 years ago 8.1 magnitude, 15 km depth Las Primaveras [Invernadero], Jalisco, Mexico

const earthquakeLat =  20.6595;
const earthquakeLon =  -103.3494;
const earthquakeCat = 8.9;

//23 years ago 8.0 magnitude, 33 km depth  El Colomo, Colima, Mexico

// const earthquakeLat =  19.0610;
// const earthquakeLon =  -104.2527;
// const earthquakeCat = 8.0;

const radiusOfEarthQuake = [
    {
        category: 9,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 380000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(50, 200, 0, 0.1)',
        zIndex: 1
    },
    {
        category: 8,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 300000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(100, 179, 0, 0.3)',
        zIndex: 2
    },
    {
        category: 7,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 200000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(120, 159, 0, 0.3)',
        zIndex: 4
    },
    {
        category: 6,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 150000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(200, 17, 0, 0.3)',
        zIndex: 5
    },
    {
        category: 5,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 100000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(200, 120, 0, 0.3)',
        zIndex: 6
    },
    {
        category: 4,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 70000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(160, 0, 0, 0.3)',
        zIndex: 7
    },
    {
        category: 3,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 50000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(180, 10, 0, 0.4)',
        zIndex: 8
    },
    {
        category: 2,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 20000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(180, 0, 0, 0.5)',
        zIndex: 9
    },
    {
        category: 1,
        centerLatitude: earthquakeLat,
        centerLongitude: earthquakeLon,
        radiusInMeter: 10000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(255, 0, 0, .5)',
        zIndex: 10
    },
];

const markerList = [
    {
        markerTitle: 'Durango, Mexico',
        markerDescription: 'Marker1',
        markerLatitude: 24.6345,
        markerLongitude: -102.5528,
        withinTremor: false
    },
    {
        markerTitle: 'Central Sonora, Mexico',
        markerDescription: 'Marker2',
        markerLatitude: 28.2972,
        markerLongitude: -109.3309,
        withinTremor: false
    },
    {
        markerTitle: 'Northern Chihuhua, Mexico',
        markerDescription: 'Marker3',
        markerLatitude: 30.1504,
        markerLongitude: -107.1143,
        withinTremor: false
    },
    {
        markerTitle: 'Southern Sonora, Mexico',
        markerDescription: 'Marker4',
        markerLatitude: 26.96671,
        markerLongitude: -108.6963,
        withinTremor: false
    },
    {
        markerTitle: 'Eastern Chihuahua, Mexico',
        markerDescription: 'Marker5',
        markerLatitude: 27.6694,
        markerLongitude: -104.7742,
        withinTremor: false
    },
    {
        markerTitle: 'Monterry Nuevo Leon, Mexico',
        markerDescription: 'Marker6',
        markerLatitude: 25.8299,
        markerLongitude: -100.188941,
        withinTremor: false
    },
    {
        markerTitle: 'Rancho San Fernando, Coahuila, Mexico',
        markerDescription: 'Marker7',
        markerLatitude: 26.66047,
        markerLongitude:  -102.285499,
        withinTremor: false
    },
    {
        markerTitle: 'San Ignacio, Sinaloa, Mexico',
        markerDescription: 'Marker8',
        markerLatitude: 23.838873 ,
        markerLongitude:  -105.443824,
        withinTremor: false
    },
    {
        markerTitle: 'Nayarit, Mexico',
        markerDescription: 'Marker9',
        markerLatitude: 22.029768 ,
        markerLongitude:  -104.680518,
        withinTremor: false
    },
    {
        markerTitle: 'Rioverde, S.L.P., Mexico',
        markerDescription: 'Marker10',
        markerLatitude: 22.183973,
        markerLongitude: -100.538672,
        withinTremor: false
    },
    {
        markerTitle: 'Tamaulipas, Mexico',
        markerDescription: 'Marker11',
        markerLatitude: 23.399364,
        markerLongitude: -99.176368,
        withinTremor: false
    },
    {
        markerTitle: 'Ciudad de Colima, Mexico',
        markerDescription: 'Marker12',
        markerLatitude: 19.100146,
        markerLongitude: -102.33008,
        withinTremor: false
    },
    {
        markerTitle: 'Michoacan, Mexico',
        markerDescription: 'Marker13',
        markerLatitude: 18.234409,
        markerLongitude: -100.700704,
        withinTremor: false
    },
    {
        markerTitle: 'Guerrero, Mexico',
        markerDescription: 'Marker14',
        markerLatitude: 18.011224,
        markerLongitude: -99.967383,
        withinTremor: false
    },
    {
        markerTitle: 'E.D.M., Mexico',
        markerDescription: 'Marker15',
        markerLatitude: 19.141667,
        markerLongitude: -99.967383,
        withinTremor: false
    },
    {
        markerTitle: 'Hidalgo, Mexico',
        markerDescription: 'Marker16',
        markerLatitude: 19.845908,
        markerLongitude: -98.912696,
        withinTremor: false
    },
    {
        markerTitle: 'Southern Gerrero, Mexico',
        markerDescription: 'Marker17',
        markerLatitude: 16.800993,
        markerLongitude: -98.165626,
        withinTremor: false
    },
    {
        markerTitle: 'Veracruz, Mexico',
        markerDescription: 'Marker18',
        markerLatitude: 19.017074,
        markerLongitude: -96.583594,
        withinTremor: false
    },
    {
        markerTitle: 'Oaxaca, Mexico',
        markerDescription: 'Marker19',
        markerLatitude: 16.464141,
        markerLongitude: -96.62754,
        withinTremor: false
    },
    {
        markerTitle: 'Chiapas, Mexico',
        markerDescription: 'Marker20',
        markerLatitude: 15.450108,
        markerLongitude: -92.320899,
        withinTremor: false
    },
    {
        markerTitle: 'Northern Chiapas, Mexico',
        markerDescription: 'Marker21',
        markerLatitude: 17.472897,
        markerLongitude: -91.793555,
        withinTremor: false
    },
    {
        markerTitle: 'Campeche, Mexico',
        markerDescription: 'Marker22',
        markerLatitude: 18.933959,
        markerLongitude: -89.420508,
        withinTremor: false
    },
];

for (let i = 0; i < markerList.length; i++){
    // Returns the distance from ‘this’ point to destination point (using haversine formula).
    let p1 = new LatLon(markerList[i].markerLatitude, markerList[i].markerLongitude);
    let p2 = new LatLon(earthquakeLat, earthquakeLon);
    let d = p1.distanceTo(p2);
    if (d <= radiusOfEarthQuake[radiusOfEarthQuake.length - Math.floor(earthquakeCat)].radiusInMeter) {
        markerList[i].withinTremor = true;
    } else {
        markerList[i].withinTremor = false;
    }
}

let fromCategory = radiusOfEarthQuake.length - Math.floor(earthquakeCat)
export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.list = markerList;
        this.listLen = this.list.length;
        this.radi = radiusOfEarthQuake;
        this.radiLen = this.radi.length;
        return ;
    }

    render() {
        return (
            <View style={styles.container}>
            <MapView
            style={styles.map}
            showsUserLocation={true}
            mapType={'standard'}
            zoomEnabled={true}
            initialRegion={{
                latitude: 23.6345,
                longitude: -102.5528,
                latitudeDelta: 20,
                longitudeDelta: 20,
              }}
            >
            
            {Array.apply(null, Array(this.listLen)).map(
                function(item, i) {
                  return (
                    <MapView.Marker
                      coordinate= {{
                        latitude: this.list[i].markerLatitude,
                        longitude: this.list[i].markerLongitude
                      }}
                      title = { this.list[i].markerTitle }
                      description = { this.list[i].markerDescription }
                      key={i}
                      image={ this.list[i].withinTremor ? redMarkerPin: greenMarkerPin }
                    >
                        <View style={styles.circle}>
                            <Text style={styles.pinText}>{ this.list[i].withinTremor ? earthquakeCat : undefined }</Text>
                        </View>
                    </MapView.Marker>
                  );
                }, this)}
                 {Array.apply(null, Array(this.radiLen)).map(
                     function(item, i) {
                        if (fromCategory <= i){
                        return (
                             <MapView.Circle 
                             center= {{
                                latitude: this.radi[i].centerLatitude,
                                longitude: this.radi[i].centerLongitude
                            }}
                            radius = { this.radi[i].radiusInMeter }
                            strokeColor = { this.radi[i].strokeColor }
                            strokeWidth = { this.radi[i].strokeWidth }
                            fillColor = { this.radi[i].fillColor }
                            zIndex = { this.radi[i].zIndex }
                            key = {i}
                             />
                         );
                        }},this)}
            </MapView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    circle: {
        width: 24,
        height: 24,
        borderRadius: 24 / 2,
        backgroundColor: 'white',
        marginLeft: 9.25,
        marginTop: 4,
    },
    pinText: {
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 15,
        marginTop: 2,
    },
});