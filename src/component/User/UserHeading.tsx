import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { STORE_NAME } from '../../util/constData';

const UserHeading = () => {

  return (
    <View style={styles.container}>
      <View>
        {/* <Text style={styles.fontsty}>Hey Nick!</Text> */}
        <Text style={styles.fontsty}>{STORE_NAME}</Text>
      </View>
      {/* <View>
        <Text style={styles.fontsty}>Hey!</Text>
      </View> */}

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  fontsty: {
    fontSize: 20,
    fontWeight: 700,
    flexWrap: 'wrap'
  },

});

export default UserHeading;