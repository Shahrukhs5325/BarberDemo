import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Banner = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Image
      style={styles.img}
      source={{
        uri: 'https://www.beautifulhennacentre.com/wp-content/uploads/2021/11/inside-banner-2.jpeg',
      }}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  img: {
    width: '100%',
    height: 164,
    borderRadius: 8,

  },

});

export default Banner;