import * as React from 'react';
import { Searchbar } from 'react-native-paper';

const MySearchbar = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
      style={{ backgroundColor: "#FFF", borderColor: "#000", borderWidth: 0.4 }}

    />
  );
};

export default MySearchbar;