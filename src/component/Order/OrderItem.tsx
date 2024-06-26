import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../../theme/palette";
import { openAddressOnMap } from "../../util/constFunctions";
import { useNavigation } from "@react-navigation/native";



const OrderItem: React.FC<any> = ({ item }) => {
  const navigation = useNavigation<any>();


  const detailsScrHandler = () => {
    navigation.navigate('OrderDetailsScreen', { item: item })
  }

  return (
    <>
      <View style={styles.container}>
        <View>
          <Text style={styles.txtName} numberOfLines={1}>Name : {item.name}</Text>
          <Text style={styles.txtName} numberOfLines={1}>Hair Specialist: {item.salesExecutiveName}</Text>
          <Text style={styles.txtName} numberOfLines={1}>Appointment Date: {item.appointmentDateTime}</Text>
          <Text style={styles.txtName} numberOfLines={1}>Appointment Time: {item.appointmentSlot}</Text>
          <Text style={styles.txtName} numberOfLines={1}>Status: {item.status === "In-Progress" ? "Completed" : item.status}</Text>
        </View>
        <View style={{ gap: 16 }}>
          <TouchableOpacity onPress={() => detailsScrHandler()}>
            <Image
              style={styles.img}
              source={require("../../assets/view.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => openAddressOnMap()}>
            <Image
              style={styles.img}
              source={require("../../assets/direction.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    </ >
  );
};

const styles = StyleSheet.create({
  container: {
    // height: 84,
    borderColor: palette.grayLight,
    shadowOpacity: 10,
    borderWidth: 1,
    marginVertical: 6,
    padding: 10,
    borderRadius: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  txtName: {
    fontSize: 14,
    flexWrap: "wrap",
    // fontWeight: "600",
    // height: 32
    color: '#000'
  },
  img: {
    width: 26,
    height: 26,
  }

});


export default OrderItem;
