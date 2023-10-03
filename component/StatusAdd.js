const StatusAdd = () => {
    return ( 
        <View style={{ flexDirection: "row" }}>
            <Card
              elevation={5}
              style={{
                borderRadius: 5,
                width: 120,
                margin: 2,
                position: "relative",
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
              <Card.Title title={item.name} subtitle={item.tribe} />
            </Card>
          </View>
     );
}
 
export default StatusAdd;