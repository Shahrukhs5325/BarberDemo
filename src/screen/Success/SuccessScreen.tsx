import { Image, StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-paper";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import { UserContext } from "../../context/user/UserContext";
import { palette } from "../../theme/palette";
import { StackActions, useNavigation } from "@react-navigation/native";




const Tab = createMaterialTopTabNavigator();


interface Props {

}

const SuccessScreen: React.FC<Props> = () => {
    const userContext = React.useContext(UserContext);
    const navigation = useNavigation<any>();


    return (
        <>
            <View style={styles.container}>
                <Image
                    style={styles.img}
                    source={require("../../assets/success.png")}
                />
                <Text style={{ fontSize: 18, fontWeight: "700", color: '#000' }}>Appointment Book Successfully</Text>

                <Button mode="contained" style={styles.btn} textColor="#FFF"
                    onPress={() => navigation.dispatch(StackActions.replace("HomeScreen"))}>
                    Home
                </Button>
            </View>

        </>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginHorizontal: 14,
        gap: 20
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
    img: {
        width: 90,
        height: 90,
    },
    btn: {
        width: '100%',
        backgroundColor: palette.primaryDark,
        borderRadius: 6,
        marginVertical: 10
    },


});

export default SuccessScreen;
