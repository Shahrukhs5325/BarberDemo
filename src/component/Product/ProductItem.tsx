import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { palette } from "../../theme/palette";
import { UserContext } from "../../context/user/UserContext";



const ProductItem: React.FC<any> = ({ item }) => {
    const userContext = React.useContext(UserContext);

    const addProdHandler = () => {
        if (userContext.cart && userContext.cart?.some((o2) => o2.productId !== item.productId)) {
            const arr = [...userContext.cart]
            arr.push(item);
            userContext.setCart(arr);
        } else {
            const arr = []
            arr.push(item);
            userContext.setCart(arr);
        }
    }

    const removeProdHandler = () => {
        const arr = [...userContext.cart]
        const arr1 = arr.filter(p => p.productId !== item.productId)
        userContext.setCart(arr1);
    }


    return (
        <>
            <View style={styles.container}>
                <View style={styles.imgBck}>
                    {item?.imageUrl ?
                        <Image
                            source={{ uri: item?.imageUrl }}
                            alt={item?.categoryName}
                            style={styles.img}
                        /> : null}
                    <View style={{ width: "80%" }}>
                        <Text style={styles.txtName} numberOfLines={2}>{item.productName}</Text>
                        <Text style={styles.txtUnit} numberOfLines={1}>{item.maxRetailPrice} mins</Text>
                        <Text style={styles.txtUnit} numberOfLines={1}>{"SAR " + item.sellingPrice}</Text>

                    </View>
                    <View style={{ width: 24 }}>
                        {userContext.cart && userContext.cart?.some((o2) => o2.productId === item.productId) ?
                            <TouchableOpacity onPress={() => removeProdHandler()}>
                                <Image
                                    style={styles.plus}
                                    source={require("../../assets/minus.png")}
                                />
                            </TouchableOpacity> :
                            <TouchableOpacity onPress={() => addProdHandler()}>
                                <Image
                                    style={styles.plus}
                                    source={require("../../assets/plus.png")}
                                />
                            </TouchableOpacity>}
                    </View>
                </View>
            </View>
        </ >
    );
};

const styles = StyleSheet.create({
    container: {
        height: 84,
        borderColor: palette.grayLight,
        shadowOpacity: 10,
        borderWidth: 1,
        marginVertical: 6,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8
    },
    txtName: {
        fontSize: 14,
        flexWrap: "wrap",
        fontWeight: "600",
        height: 36
    },
    txtUnit: {
        fontSize: 14,
        flexWrap: "wrap",

    },
    img: {
        width: 70,
        height: 70,
        borderRadius: 8,
    },
    imgBck: {
        width: '76%',
        flexDirection: 'row',
        gap: 10,
        //   justifyContent: 'center',
        alignItems: 'center',
    },
    plus: {
        width: 26,
        height: 26,
    }

});


export default ProductItem;
