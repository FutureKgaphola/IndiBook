import { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const locationsOfInterest = [
  {
    tittle: "Bakone Malapa",
    latitude: -23.9876984,
    longitude: 29.4563627,
    description: "Regarded as a living museum...",
  },
  {
    tittle: "Stredom Tunnel",
    latitude: -24.4519396,
    longitude: 30.6052759,
    description: "Two tunnels, one after another...",
  },
];

const Places = () => {
  const [lat, Setlat] = useState(0.0);
  const [lon, Setlon] = useState(0.0);
  const [latDelta, SetlatDelta] = useState(0.0);
  const [lonDelta, SetlonDelta] = useState(0.0);

  const SetmyLocation = (region) => {
    Setlat(parseFloat(region.latitude));
    Setlon(parseFloat(region.longitude));
    SetlatDelta(parseFloat(region.latitudeDelta));
    SetlonDelta(parseFloat(region.longitudeDelta));
  };
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        onRegionChange={(region) => SetmyLocation(region)}
        region={{
            latitude: -23.9877033,
            longitude: 29.4563627,
            latitudeDelta: 4.1,
            longitudeDelta: 4.1,
        }}
        
      >
        {locationsOfInterest.map((item, index) => (
          <Marker
          
            key={index}
            coordinate={{
              latitude: parseFloat(item.latitude),
              longitude: parseFloat(item.longitude),
            }}
            
            pinColor={"green"}
            title={item.tittle}
            description={item.description}
          >
            

          </Marker>
          
        ))}
      </MapView>
    </View>
  );
};
export default Places;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
