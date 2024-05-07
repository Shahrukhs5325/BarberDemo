import * as React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Searchbar, Text } from 'react-native-paper';
import { getCategory, getproductlist } from '../../api/Product/productApi';
import { palette } from '../../theme/palette';
import { useNavigation } from '@react-navigation/native';
import CategoriesItem from './CategoriesItem';

const WIDTH = Dimensions.get('window').width;

const ItemCol = parseInt(WIDTH / 93)
const gap = 12;

const Categories = () => {
  const navigation = useNavigation<any>();

  const [categoriesData, setCategoriesData] = React.useState([]);

  React.useEffect(() => {
    fetchCategory();
  }, []);

  const fetchCategory = async () => {
    try {
      const res = await getproductlist();
      console.log("getCategory", res?.data);

      // setCategoriesData(res?.data);
      setCategoriesData(res?.data?.lstCategories)

    } catch (err) {
      console.log('error fetchCategory : ', err);
    }
  }

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.fontsty}>Our Services</Text>
        <Text style={styles.viewAll}
          onPress={() => navigation.navigate('ProductScreen', { categoryId: null })}>
          View all
        </Text>
      </View>

      <View >
        {categoriesData?.length > 0 &&
          // <ScrollView horizontal={true}>
          <View style={styles.itemsWrap} >
            {categoriesData?.slice(0, ItemCol * 3)?.map((item: any, i: number) => (
              <View key={i}>
                <CategoriesItem category={item} />
              </View>
            ))}
          </View>
          // </ScrollView>
        }
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 10
  },
  fontsty: {
    fontSize: 16,
    fontWeight: 700,
    flexWrap: 'wrap'
  },
  viewAll: {
    fontSize: 14,
    fontWeight: 600,
    flexWrap: 'wrap',
    color: palette.primaryDark
  },
  itemsWrap: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: -(gap / 2),
    marginHorizontal: -(gap / 2),
  },

});

export default Categories;