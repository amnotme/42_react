import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';
import LatLon from  "./latlon.js";
import greenMarkerPin from "./img/green_marker.png";
import redMarkerPin from "./img/red_marker.png";
import * as firebase from "firebase";


// Earthquakes in different locations with different magnitudes 

//20 miles from Mexicali, Baja California, Mexico · Apr 22, 10:53 AM 2.7

const earthquakeLat =  30.8406;
const earthquakeLon =  -115.2838;
const earthquakeCat = 2.7;

//The magnitude 6.1 quake hit 43km (27 miles) east of Oaxaca at a depth of 10km at 6.56GMT

// const earthquakeLat =  17.0542;
// const earthquakeLon =  -96.71329;
// const earthquakeCat = 6.7;

// 86 years ago 8.1 magnitude, 15 km depth Las Primaveras [Invernadero], Jalisco, Mexico

// const earthquakeLat =  20.6595;
// const earthquakeLon =  -103.3494;
// const earthquakeCat = 8.9;

//23 years ago 8.0 magnitude, 33 km depth  El Colomo, Colima, Mexico

// const earthquakeLat =  19.0610;
// const earthquakeLon =  -104.2527;
// const earthquakeCat = 8.0;


// let fromCategory = Object.keys(radiusOfEarthQuake).length - Math.floor(earthquakeCat)
// for (let i = 0; i < markerList.length; i++){
//     // Returns the distance from ‘this’ point to destination point (using haversine formula).
//     let p1 = new LatLon(markerList[i].markerLatitude, markerList[i].markerLongitude);
//     let p2 = new LatLon(earthquakeLat, earthquakeLon);
//     let d = p1.distanceTo(p2);

//     // alert(Object.keys(radiusOfEarthQuake).length);
//     if (d <= /*radiusOfEarthQuake[radiusOfEarthQuake.length - Math.floor(earthquakeCat)].radiusInMeter*/ 10000) {
//         markerList[i].withinTremor = true;
//     } else {
//         markerList[i].withinTremor = false;
//     }
// }



// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyCFfiQarjJjz6GYwi3pt1O4sizM2XjpHJI",
    authDomain: "tremors-1524470767864.firebaseapp.com",
    databaseURL: "https://tremors-1524470767864.firebaseio.com",
    projectId: "tremors-1524470767864",
    storageBucket: "tremors-1524470767864.appspot.com",
  };
  
firebase.initializeApp(firebaseConfig);
// const rootRef = firebase.database().ref();
// const radiusRef = rootRef.child('radiusOfEarthquake');
// alert(radiusRef);
export default class App extends React.Component {
    
    constructor(props) {
        super(props);
        // this.list = markerList;
        // this.listLen = this.list.length;
        this.state = ({
            radiusOfEarthquake: [],
            markerList: [],
        });
        
        // alert(radiusOfEarthQuake.ref());
        // this.app = firebase.initializeApp(firebaseConfig);
        // this.radis = this.app.database().ref().child('node');
        // alert(this.radis[9]);
        // this.radi = radiusOfEarthQuake;
        // this.radiLen = this.radi.length;
        return ;
        // alert(this.state.radiusOfEarthquake['category']);
       
    
    }
    componentWillMount(){
        let that = this;
        let q = firebase.database().ref('radiusOfEarthquake');
        let k = firebase.database().ref('markerList')
        let finished = [];
        let finished2 = [];
        q.on('value', (snap) => {
            finished = [];
            snap.forEach(function(data){
                let res = data.val();
                res["key"] = data.key;
                finished.push(res);
            })
            let len = finished.length;
            that.setState({
                radiusOfEarthquake: finished
            })
        })
        k.once('value', snapshot => {
            snapshot.forEach(function(data){
                let res = data.val();
                res["key"] = data.key;
                finished2.push(res);
            })
            that.setState({
                markerList: finished2
            })
        })  
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
            
            {/* {Array.apply(null, Array(this.listLen)).map(
                function(item, i) {
                  */}
                 { this.state.markerList.map(function(x, i){
                    return (  
                    <MapView.Marker
                      coordinate= {{
                        latitude: x.markerLatitude,
                        longitude: x.markerLongitude
                      }}
                      title = { x.markerTitle }
                      description = { x.markerDescription }
                      key={i}
                      image={ x.withinTremor ? redMarkerPin: greenMarkerPin }
                    >   
                        <View style={styles.circle}>
                            <Text style={styles.pinText}>{ x.withinTremor ? earthquakeCat : undefined }</Text>
                        </View>
                    </MapView.Marker>
                  );
                })}
    
                     { this.state.radiusOfEarthquake.map(function(x, i){
                        // if (fromCategory <= i){
                        return (
                            <MapView.Circle 
                            center= {{
                                latitude: x.centerLatitude,
                                longitude: x.centerLongitude
                            }}
                            radius = { x.radiusInMeter }
                            strokeColor = { x.strokeColor }
                            strokeWidth = { x.strokeWidth }
                            fillColor = { x.fillColor }
                            zIndex = { x.zIndex }
                            key = {i}
                            />
                        )
                     })} 
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