import * as React from 'react';
import { Image, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';

const Banner = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Image
      style={styles.img}
      source={{
        uri: 'https://img.freepik.com/free-vector/realistic-barbershop-horizontal-banner-template_52683-94969.jpg?w=1800&t=st=1715182695~exp=1715183295~hmac=5505462b126803f4cd1aecee51ce3b5ce49e2cc5d17874c123886559d4b91316',
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