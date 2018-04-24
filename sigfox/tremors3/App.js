import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MapView } from 'expo';


export default class App extends React.Component {
  
    render() {
        return (
            <View style={styles.map}>
            <MapView
            style={styles.map}
            initialRegion={{
                latitude: 23.6345,
                longitude: -102.5528,
                latitudeDelta: 20,
                longitudeDelta: 20,
              }}
            >
                <MapView.Marker 
                    coordinate= {{
                        latitude: 24.6345,
                        longitude: -102.5528
                    }}
                    title={'Durango, Mexico'}
                    description={'Marker1'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 28.2972,
                        longitude: -109.3309
                    }}
                    title={'Central Sonora, Mexico'}
                    description={'Marker2'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 30.1504,
                        longitude: -107.1143
                    }}
                    title={'Northern Chihuhua, Mexico'}
                    description={'Marker3'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 26.96671,
                        longitude: -108.6963
                    }}
                    title={'Southern Sonora, Mexico'}
                    description={'Marker4'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 27.6694,
                        longitude: -104.7742
                    }}
                    title={'Eastern Chihuahua, Mexico'}
                    description={'Marker5'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 25.8299,
                        longitude: -100.188941
                    }}
                    title={'Monterry Nuevo Leon, Mexico'}
                    description={'Marker6'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 26.66047,
                        longitude:  -102.285499
                    }}
                    title={'Rancho San Fernando, Coahuila, Mexico'}
                    description={'Marker7'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 23.838873 ,
                        longitude: -106.443824

                    }}
                    title={'San Ignacio, Sinaloa, Mexico'}
                    description={'Marker8'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 22.029768 ,
                        longitude: -104.680518


                    }}
                    title={'Nayarit, Mexico'}
                    description={'Marker9'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 22.183973 ,
                        longitude: -100.538672
                    }}
                    title={'Rioverde, S.L.P., Mexico'}
                    description={'Marker10'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 23.399364 ,
                        longitude: -99.176368
                    }}
                    title={'Tamaulipas, Mexico'}
                    description={'Marker11'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 19.100146 ,
                        longitude: -103.483008
                    }}
                    title={'Ciudad de Colima, Mexico'}
                    description={'Marker12'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 18.434409,
                        longitude: -102.120704
                    }}
                    title={'Michoacan, Mexico'}
                    description={'Marker13'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 17.011224,
                        longitude: -99.967383
                    }}
                    title={'Guerrero, Mexico'}
                    description={'Marker14'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 19.141667,
                        longitude: -99.967383
                    }}
                    title={'E.D.M., Mexico'}
                    description={'Marker15'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 19.845908,
                        longitude: -98.912696
                    }}
                    title={'Hidalgo, Mexico'}
                    description={'Marker16'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 16.800993,
                        longitude: -98.165626
                    }}
                    title={'Southern Gerrero, Mexico'}
                    description={'Marker17'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 19.017074,
                        longitude: -96.583594
                    }}
                    title={'Veracruz, Mexico'}
                    description={'Marker18'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 16.464141,
                        longitude:  -96.62754
                    }}
                    title={'Oaxaca, Mexico'}
                    description={'Marker19'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 15.450108,
                        longitude:  -92.320899
                    }}
                    title={'Chiapas, Mexico'}
                    description={'Marker20'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 17.472897,
                        longitude: -91.793555
                    }}
                    title={'Northern Chiapas, Mexico'}
                    description={'Marker21'}
                />
                <MapView.Marker 
                    coordinate= {{
                        latitude: 18.933959,
                        longitude: -89.420508
                    }}
                    title={'Campeche, Mexico'}
                    description={'Marker22'}
                />
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