import { Text, Image, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Button } from "react-native-paper";
import { useState } from "react";
import store from "../assets/store.png";
import category from "../assets/category.png";
import personraised from '../assets/personraised.png'
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
const Market = () => {
  const [categories, setcategories] = useState(1);
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 5,
        }}
      >
        <Text style={{ fontFamily: "NunitoRegular", fontSize: 25, margin: 5 }}>
          Market place
        </Text>
        <Feather name="search" size={24} color="black" />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          padding: 5,
          gap: 5,
        }}
      >
        <Button
          icon={store}
          mode="elevated"
          onPress={() => console.log("Pressed")}
        >
          Sell
        </Button>

        <Button
          icon={category}
          mode="elevated"
          onPress={() => setcategories(categories === 1 ? 2 : 1)}
        >
          categories {categories}/2
        </Button>
      </View>

      <Text style={{ marginLeft: 5 }}>category {categories}</Text>

      <View style={{ flexDirection: "row" }}>
        <Card elevation={3}>
          <Image
            source={require("../assets/artifact1.jpg")}
            style={{ width: 150, height: 200 }}
          />
          <View style={{ flexDirection: "row", paddingBottom: 0 }}>
            <Image
              source={require("../assets/vendaman.jpg")}
              style={{
                width: 40,
                height: 40,
                objectFit: "scale-down",
                borderColor: "white",
                borderWidth: 1,
                zIndex: 5,
                borderRadius: 150,
                shadowColor: "white",
                top: 0,
              }}
            />

            <View style={{ marginLeft: 2 }}>
              <Text style={{ fontFamily: "NunitoRegular", fontWeight: "bold" }}>
                Mulalo Tshigoba
              </Text>
              <Text style={{ fontFamily: "PoppinsRegular", fontSize: 10 }}>
                Zulu tribe
              </Text>
              <View style={{ flexDirection: "row" }}>
                <Text style={{ fontFamily: "PoppinsRegular", fontSize: 10 }}>
                  03/10/23
                </Text>
                <Entypo
                  name="back-in-time"
                  size={12}
                  color="gray"
                  style={{ marginLeft: 4 }}
                />
              </View>
            </View>
          </View>

          <View
            style={{ flexDirection: "row", justifyContent: "center" }}
          >
            <Button
              icon={personraised}
              mode="elevated"
              
            >
              enquire
            </Button>
          </View>
        </Card>
      </View>
    </View>
  );
};

export default Market;
