import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Badge, Text } from 'react-native-paper';
import { STORE_NAME } from '../../util/constData';
import { useNavigation } from '@react-navigation/native';


interface Props {
  title?: string;
  isIconHide?: boolean;

}


const Topbar: React.FC<Props> = ({ title, isIconHide }) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', alignItems: "center", gap: 8 }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.imgBack}
            source={require("../../assets/back.png")}
          />
        </TouchableOpacity>
        <Text style={styles.fontsty}>{title}</Text>
      </View>
      {!isIconHide &&
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <View style={{ flexDirection: 'column' }}>
            {/* <Badge>3</Badge> */}
            <Image
              style={styles.img}
              source={require("../../assets/cart.png")}
            />
          </View>
        </TouchableOpacity>}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36,
    margin: 12
  },
  fontsty: {
    fontSize: 20,
    fontWeight: 700,
    flexWrap: 'wrap',
    color: '#000'
  },
  img: {
    width: 24,
    height: 24
  },
  imgBack: {
    width: 22,
    height: 22
  }

});

export default Topbar;