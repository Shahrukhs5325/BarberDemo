import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../../theme/palette";

// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = width / 93;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;


const CategoriesItem: React.FC<any> = ({ category }) => {

    const goProdScreenHandler = () => {

    }

    return (
        <>
            <TouchableOpacity onPress={() => goProdScreenHandler()}>
                <View style={styles.singleItem}>
                    <View style={styles.imgBck}>
                        {category?.imageUrl ?
                            <Image
                                source={{ uri: category?.imageUrl }}
                                alt={category?.categoryName}
                                style={styles.img}
                            /> : null}
                    </View>
                    <Text style={styles.txt} numberOfLines={2}>{category.categoryName}</Text>

                </View>
            </TouchableOpacity>
        </ >
    );
};

const styles = StyleSheet.create({
    txt: {
        fontSize: 12,
        textAlign: 'center',
        flexWrap: "wrap",
    },
    img: {
        width: 60,
        height: 60,
        borderRadius: 8,
    },
    imgBck: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 192, 255, 0.03)',
        borderRadius: 12,
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
    singleItem: {
        marginTop: 12,
        alignItems: 'center',
        marginHorizontal: gap / 2,
        minWidth: childWidth,
        maxWidth: childWidth,
    },
});


export default CategoriesItem;
