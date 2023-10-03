import { FlatList, Image,Text } from "react-native";
import { View } from "react-native";
import { Card } from "react-native-paper";
import { data } from "../data";
import Posts from "../component/Posts";
import { ScrollView } from "react-native";
const Home = () => {
  return (
    <View style={{flex:1}}>
        <ScrollView>
        <View>
        <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{ backgroundColor: "white" }}
        renderItem={({ item }) => (
          <View style={{ flexDirection: "row" }}>
            <Card
              elevation={5}
              style={{
                borderRadius: 5,
                width: 120,
                margin: 2,
                position: "relative",
                backgroundColor:'white'
              }}
            >
              <Image
                source={item.profimg}
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "scale-down",
                  borderColor: "white",
                  borderWidth: 1,
                  position: "absolute",
                  zIndex: 5,
                  marginTop: 10,
                  marginLeft: 10,
                  borderRadius: 150,
                  shadowColor: "white",
                  top: 0,
                }}
              />
              <Card.Cover source={item.postedimg} />
              <Card.Title title={item.name} subtitle={item.tribe} titleStyle={{color:'green'}}/>
            </Card>
          </View>
        )}
      />
        </View>
      
      <Posts/>
        </ScrollView>
    </View>
  );
};

export default Home;
