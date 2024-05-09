import React from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../../theme/palette";
import { UserContext } from "../../context/user/UserContext";


// Gap stuff
const { width } = Dimensions.get('window');
const gap = 12;
const itemPerRow = width / 93;
const totalGapSize = (itemPerRow - 1) * gap;
const windowWidth = width;
const childWidth = (windowWidth - totalGapSize) / itemPerRow;

const SalesExecutiveItem: React.FC<any> = ({ item }) => {
    const userContext = React.useContext(UserContext);


    const selectSalesExHAndler = () => {
        userContext.setsalesEx(item);
    }



    return (
        <>
            <TouchableOpacity onPress={() => selectSalesExHAndler()}>
                <View style={userContext.salesEx && userContext.salesEx.id === item.id ? styles.selectSingleItem : styles.singleItem}>
                    <View style={styles.imgBck}>
                        {item?.imageUrl ?
                            <Image
                                source={{ uri: item?.imageUrl }}
                                alt={item?.imageUrl}
                                style={styles.img}
                            /> : <Image
                                source={require("../../assets/profile.png")}
                                //  source={{ uri: item?.imageUrl }}
                                alt={item?.imageUrl}
                                style={styles.img}
                            />}
                    </View>
                    <Text style={userContext.salesEx && userContext.salesEx.id === item.id ? styles.selectTxt : styles.txt} numberOfLines={2}>{item.name}</Text>

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
        // height: 30,
        color:'#000'
    },
    selectTxt: {
        fontSize: 12,
        textAlign: 'center',
        flexWrap: "wrap",
        color: '#FFF'
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
        marginTop: 10
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
        minWidth: 90,
        width: 90,
        maxHeight: 110,
        height: 100,
        backgroundColor: palette.grayLight,
        borderRadius: 8,
    },
    selectSingleItem: {
        marginTop: 12,
        alignItems: 'center',
        marginHorizontal: gap / 2,
        minWidth: 90,
        width: 90,
        maxHeight: 100,
        height: 100,
        backgroundColor: palette.primaryDark,
        borderRadius: 8,

    },
});


export default SalesExecutiveItem;
