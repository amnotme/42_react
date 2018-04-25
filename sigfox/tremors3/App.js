import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import RadialGradient from 'react-native-radial-gradient';
const greenMarkerPin = require('./img/green_marker.png');
const redMarkerPin = require('./img/red_marker.png');

const markerList = [
    {
        markerTitle: 'Durango, Mexico',
        markerDescription: 'Marker1',
        markerLatitude: 24.6345,
        markerLongitude: -102.5528
    },
    {
        markerTitle: 'Central Sonora, Mexico',
        markerDescription: 'Marker2',
        markerLatitude: 28.2972,
        markerLongitude: -109.3309
    },
    {
        markerTitle: 'Northern Chihuhua, Mexico',
        markerDescription: 'Marker3',
        markerLatitude: 30.1504,
        markerLongitude: -107.1143
    },
    {
        markerTitle: 'Southern Sonora, Mexico',
        markerDescription: 'Marker4',
        markerLatitude: 26.96671,
        markerLongitude: -108.6963
    },
    {
        markerTitle: 'Eastern Chihuahua, Mexico',
        markerDescription: 'Marker5',
        markerLatitude: 27.6694,
        markerLongitude: -104.7742
    },
    {
        markerTitle: 'Monterry Nuevo Leon, Mexico',
        markerDescription: 'Marker6',
        markerLatitude: 25.8299,
        markerLongitude: -100.188941
    },
    {
        markerTitle: 'Rancho San Fernando, Coahuila, Mexico',
        markerDescription: 'Marker7',
        markerLatitude: 26.66047,
        markerLongitude:  -102.285499
    },
    {
        markerTitle: 'San Ignacio, Sinaloa, Mexico',
        markerDescription: 'Marker8',
        markerLatitude: 23.838873 ,
        markerLongitude:  -105.443824
    },
    {
        markerTitle: 'Nayarit, Mexico',
        markerDescription: 'Marker9',
        markerLatitude: 22.029768 ,
        markerLongitude:  -104.680518
    },
    {
        markerTitle: 'Rioverde, S.L.P., Mexico',
        markerDescription: 'Marker10',
        markerLatitude: 22.183973,
        markerLongitude: -100.538672
    },
    {
        markerTitle: 'Tamaulipas, Mexico',
        markerDescription: 'Marker11',
        markerLatitude: 23.399364,
        markerLongitude: -99.176368
    },
    {
        markerTitle: 'Ciudad de Colima, Mexico',
        markerDescription: 'Marker12',
        markerLatitude: 19.100146,
        markerLongitude: -102.83008
    },
    {
        markerTitle: 'Michoacan, Mexico',
        markerDescription: 'Marker13',
        markerLatitude: 18.434409,
        markerLongitude: -101.720704
    },
    {
        markerTitle: 'Guerrero, Mexico',
        markerDescription: 'Marker14',
        markerLatitude: 18.011224,
        markerLongitude: -99.967383
    },
    {
        markerTitle: 'E.D.M., Mexico',
        markerDescription: 'Marker15',
        markerLatitude: 19.141667,
        markerLongitude: -99.967383
    },
    {
        markerTitle: 'Hidalgo, Mexico',
        markerDescription: 'Marker16',
        markerLatitude: 19.845908,
        markerLongitude: -98.912696
    },
    {
        markerTitle: 'Southern Gerrero, Mexico',
        markerDescription: 'Marker17',
        markerLatitude: 16.800993,
        markerLongitude: -98.165626
    },
    {
        markerTitle: 'Veracruz, Mexico',
        markerDescription: 'Marker18',
        markerLatitude: 19.017074,
        markerLongitude: -96.583594
    },
    {
        markerTitle: 'Oaxaca, Mexico',
        markerDescription: 'Marker19',
        markerLatitude: 16.464141,
        markerLongitude: -96.62754
    },
    {
        markerTitle: 'Chiapas, Mexico',
        markerDescription: 'Marker20',
        markerLatitude: 15.450108,
        markerLongitude: -92.320899
    },
    {
        markerTitle: 'Northern Chiapas, Mexico',
        markerDescription: 'Marker21',
        markerLatitude: 17.472897,
        markerLongitude: -91.793555
    },
    {
        markerTitle: 'Campeche, Mexico',
        markerDescription: 'Marker22',
        markerLatitude: 18.933959,
        markerLongitude: -89.420508
    },
];
const earthquakeLat =  16.095054;
const earthquakeLon =  -101.401719;
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
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 300000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(100, 179, 0, 0.3)',
        zIndex: 2
    },
    {
        category: 7,
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 200000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(120, 159, 0, 0.3)',
        zIndex: 4
    },
    {
        category: 6,
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 150000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(200, 17, 0, 0.3)',
        zIndex: 5
    },
    {
        category: 5,
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 100000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(200, 120, 0, 0.3)',
        zIndex: 6
    },
    {
        category: 4,
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 70000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(160, 0, 0, 0.3)',
        zIndex: 7
    },
    {
        category: 3,
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 50000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(180, 10, 0, 0.4)',
        zIndex: 8
    },
    {
        category: 2,
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 20000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(180, 0, 0, 0.5)',
        zIndex: 9
    },
    {
        category: 1,
        centerLatitude: 18.63,
        centerLongitude: -101.50,
        radiusInMeter: 10000,
        strokeWidth: 0.5,
        strokeColor: 'rgba(255, 255, 255, 0.01)',
        fillColor: 'rgba(255, 0, 0, .5)',
        zIndex: 10
    },
];
  
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
                      image={greenMarkerPin}
                    />
                  );
                }, this)}
                 {Array.apply(null, Array(this.radiLen)).map(
                     function(item, i) {
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
                        },this)}
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
});