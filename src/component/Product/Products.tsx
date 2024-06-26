import * as React from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { getproductlist, getproductlistByCategory } from '../../api/Product/productApi';
import { useNavigation } from '@react-navigation/native';
import ProductItem from './ProductItem';
import { UserContext } from '../../context/user/UserContext';
import { palette } from '../../theme/palette';
import EmptyData from '../Empty/EmptyData';


const Products = ({ categoryId }) => {
  const navigation = useNavigation<any>();
  const userContext = React.useContext(UserContext);

  const [productData, setProductData] = React.useState(null);
  const [categoriesData, setCategoriesData] = React.useState(null);
  const [refreshing, setRefreshing] = React.useState(false);

  React.useEffect(() => {
    categoryId ? fetchProductlistByCategory() : fetchProductList();
  }, [categoryId]);

  const fetchProductList = async () => {
    try {
      const res = await getproductlist();
      //   console.log("fetchProductList", res?.data.lstProductSearch);

      setProductData(res?.data?.lstProductSearch);
      setCategoriesData(res?.data?.lstCategories)
    } catch (err) {
      console.log('error fetchProductList : ', err);
    }
  }

  const fetchProductlistByCategory = async () => {
    try {
      const res = await getproductlistByCategory(categoryId);
      //  console.log("fetchProductList", res?.data.lstProductSearch);
      setProductData(res?.data?.lstProductSearch);
      // setCategoriesData(res?.data?.lstCategories)
    } catch (err) {
      console.log('error fetchProductList : ', err);
    }
  }

  const onRefresh = () => {
    setRefreshing(true);
    categoryId ? fetchProductlistByCategory() : fetchProductList();
    setRefreshing(false);
  }


  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
        data={productData}
        renderItem={({ item }) =>
          <ProductItem
            item={item}
          />
        }
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListEmptyComponent={EmptyData}
        style={styles.list}
        contentContainerStyle={styles.listContents}
      />
      {userContext.cart && userContext.cart.length > 0 ?
        <Button mode="contained" style={styles.btn} textColor="#FFF"
          onPress={() => navigation.navigate('CartScreen')}>
          Go To Cart
        </Button> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 14
  },
  fontsty: {
    fontSize: 18,
    fontWeight: 700,
    flexWrap: 'wrap',
    color: '#000'
  },
  list: {
    //   paddingTop: 15,
    width: '100%',
  },
  listContents: {
    //alignItems: 'center',
    //  width: '100%',
    paddingBottom: 50,
  },
  btn: {
    width: '100%',
    backgroundColor: palette.primaryDark,
    borderRadius: 6,
    marginVertical: 10
  },


});

export default Products;