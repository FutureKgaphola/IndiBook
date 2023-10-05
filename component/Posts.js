import { View, Image, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { Card } from "react-native-elements";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Posts = () => {
  const pics = [{
    key: 1,
    image: require('../assets/tradition2.jpg'),
  },
  {
    key: 2,
    image: require('../assets/tradition1.jpg'),
  }
  ]
  return (

    <ScrollView
    nestedScrollEnabled={true}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View>
        <Card elevation={3}>
          <View style={{ flexDirection: "row", paddingBottom: 0 }}>
            <Image
              source={require("../assets/tradition5.jpg")}
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
                Seema Nkuna
              </Text>
              <Text style={{ fontFamily: "PoppinsRegular", fontSize: 10 }}>
                Pedi tribe
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
          <Text>
            The Zulu were originally a minor clan in what is today Northern KwaZulu-Natal,
            founded ca. 1574 by Zulu kaMalandela. In the Nguni languages, iZulu means heaven
            or weather. At that time, the area was occupied by many large Nguni communities
            and clans (also called the isizwe people or nation, or called isibongo, referring
            to their clan or family name). Nguni communities had migrated down Africa's east
            coast over millennia, as part of the Bantu migrations.
          </Text>

          <View
            style={{
              backgroundColor: "gray",
              height: 1,
              marginTop: 5,
              marginBottom: 5,
            }}
          ></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <AntDesign name="like2" size={18} color="black" />
              </TouchableOpacity>

              <Text>Like</Text>
            </View>

            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <FontAwesome name="comment-o" size={18} color="black" />
              </TouchableOpacity>

              <Text>Comment</Text>
            </View>
            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>
              <Text>Share</Text>
            </View>
          </View>
        </Card>
      </View>

      <View>
        <Card elevation={3}>
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
                Pedi tribe
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
          <Text>
            The Venda of today are Vhangona, Takalani (Ungani), Masingo
            and others. Vhangona are the original inhabitants of Venda,
            they are also referred as Vhongwani wapo; while Masingo and
            others are originally from central Africa and the East African
            Rift, migrating across the Limpopo river during the Bantu expansion,
            Venda people originated from central
            and east Africa, just like the other South African tribes
          </Text>
          <View
            style={{
              backgroundColor: "gray",
              height: 1,
              marginTop: 5,
              marginBottom: 5,
            }}
          ></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <AntDesign name="like2" size={18} color="black" />
              </TouchableOpacity>

              <Text>Like</Text>
            </View>

            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <FontAwesome name="comment-o" size={18} color="black" />
              </TouchableOpacity>

              <Text>Comment</Text>
            </View>
            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>
              <Text>Share</Text>
            </View>
          </View>
        </Card>
      </View>

      <View>
        <Card elevation={3}>
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
                Pedi tribe
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
          <Text>
            The Venda of today are Vhangona, Takalani (Ungani), Masingo
            and others. Vhangona are the original inhabitants of Venda,
            they are also referred as Vhongwani wapo; while Masingo and
            others are originally from central Africa and the East African
            Rift, migrating across the Limpopo river during the Bantu expansion,
            Venda people originated from central
            and east Africa, just like the other South African tribes
          </Text>

          <FlatList
            numColumns={2}
            data={pics}
            renderItem={({ item }) => (
              <View style={{ flexDirection: "row", padding: 2 }}>
                <Image source={item.image} style={{ width: 160, height: 260, padding: 2 }} />
              </View>
            )}

          />

          <View
            style={{
              backgroundColor: "gray",
              height: 1,
              marginTop: 5,
              marginBottom: 5,
            }}
          ></View>
          <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <AntDesign name="like2" size={18} color="black" />
              </TouchableOpacity>

              <Text>Like</Text>
            </View>

            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <FontAwesome name="comment-o" size={18} color="black" />
              </TouchableOpacity>

              <Text>Comment</Text>
            </View>
            <View>
              <TouchableOpacity style={{ alignSelf: "center" }}>
                <MaterialCommunityIcons
                  name="share-variant-outline"
                  size={18}
                  color="black"
                />
              </TouchableOpacity>
              <Text>Share</Text>
            </View>
          </View>
        </Card>
      </View>
    </ScrollView>


  );
};

export default Posts;
