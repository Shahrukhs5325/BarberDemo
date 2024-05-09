import { Image, StyleSheet, Text, View } from "react-native";
import { palette } from "../../theme/palette";

interface Props { }


const EmptyData: React.FC<Props> = () => {

  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={require("../../assets/empty.png")}
      />
      <Text style={styles.txtName}>
        Data Not Found
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'center',
    marginTop: '20%'
  },
  txtName: {
    marginVertical: 14,
    fontSize: 14,
    color: '#000'
  },
  img: {
    width: 70,
    height: 70,
  },


});



export default EmptyData;
