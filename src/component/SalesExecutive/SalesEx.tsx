import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { UserContext } from '../../context/user/UserContext';
import EmptyData from '../Empty/EmptyData';
import { getSalesexecutive } from '../../api/User/userApi';
import SalesExecutiveItem from './SalesExecutiveItem';


const SalesEx = () => {
  const navigation = useNavigation<any>();
  const userContext = React.useContext(UserContext);

  const [salesExecutiveData, setSalesExecutiveData] = React.useState(null);
  React.useEffect(() => {
    fetchSalesExecutive();
  }, []);

  const fetchSalesExecutive = async () => {
    try {
      const res = await getSalesexecutive();
      setSalesExecutiveData(res?.data);
    } catch (err) {
      console.log('error fetchSalesExecutive : ', err);
    }
  }


  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 16, fontWeight: 700, color: "#000" }}>Professional</Text>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={salesExecutiveData}
        renderItem={({ item }) =>
          <SalesExecutiveItem
            item={item}
          />
        }
        // refreshControl={
        //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        ListEmptyComponent={EmptyData}
        style={styles.list}
        contentContainerStyle={styles.listContents}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginHorizontal: 14,
    marginTop: 10
  },
  fontsty: {
    fontSize: 18,
    fontWeight: 700,
    // flexWrap: 'wrap',
    // color: '#000',
  },
  list: {
    //   paddingTop: 15,
    width: '100%',
  },
  listContents: {
    //alignItems: 'center',
    //  width: '100%',
    paddingBottom: 150,
  },


});

export default SalesEx;