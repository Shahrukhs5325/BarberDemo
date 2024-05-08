import * as React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { Text } from 'react-native-paper';
import { getproductlist, getproductlistByCategory } from '../../api/Product/productApi';
import { useNavigation } from '@react-navigation/native';
import ProductItem from './ProductItem';


const Products = ({ categoryId }) => {
  const navigation = useNavigation<any>();

  const [productData, setProductData] = React.useState(null);
  const [categoriesData, setCategoriesData] = React.useState(null);

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
        // refreshControl={
        //     <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        // }
        // ListEmptyComponent={EmptyDataPromo}
        style={styles.list}
        contentContainerStyle={styles.listContents}
      />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 14
  },
  fontsty: {
    fontSize: 18,
    fontWeight: 700,
    flexWrap: 'wrap'
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

export default Products;