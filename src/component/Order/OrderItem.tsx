import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { palette } from "../../theme/palette";



const OrderItem: React.FC<any> = ({ item }) => {


  return (
    <>
      <View style={styles.container}>
        <Text style={styles.txtName} numberOfLines={1}>Hair Specialist: {item.salesExecutiveName}</Text>
        <Text style={styles.txtName} numberOfLines={1}>Appointment Date: {item.appointmentDateTime}</Text>
        <Text style={styles.txtName} numberOfLines={1}>Appointment Time: {item.appointmentSlot}</Text>
        <Text style={styles.txtName} numberOfLines={1}>Status: {item.status}</Text>
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

    borderRadius: 8
  },
  txtName: {
    fontSize: 14,
    flexWrap: "wrap",
    fontWeight: "600",
    // height: 32
  },

});


export default OrderItem;
