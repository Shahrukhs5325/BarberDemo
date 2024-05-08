import * as React from 'react';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Text } from 'react-native-paper';
import { STORE_NAME } from '../../util/constData';
import { useNavigation } from '@react-navigation/native';

const UserHeading = () => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.fontsty}>Hey Nick!</Text> */}
        <Text style={styles.fontsty}>{STORE_NAME}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('CartScreen')}>
          <Image
            style={styles.img}
            source={require("../../assets/cart.png")}
          />
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 36
  },
  fontsty: {
    fontSize: 20,
    fontWeight: 700,
    flexWrap: 'wrap'
  },
  img: {
    width: 24,
    height: 24
  },

});

export default UserHeading;