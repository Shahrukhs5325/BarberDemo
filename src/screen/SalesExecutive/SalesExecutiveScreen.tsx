import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Products from "../../component/Product/Products";
import Topbar from "../../component/TopBar/Topbar";
import { getSalesexecutive } from "../../api/User/userApi";
import { Button } from "react-native-paper";
import { palette } from "../../theme/palette";
import { useNavigation } from "@react-navigation/native";
import SalesExecutiveItem from "../../component/SalesExecutive/SalesExecutiveItem";

type Props = {

};

const SalesExecutiveScreen: React.FC<Props> = () => {
    const navigation = useNavigation<any>();
    const [salesExecutiveData, setSalesExecutiveData] = React.useState(null);
    const [isSelected, setIsSelected] = React.useState(false);




    React.useEffect(() => {
        fetchSalesExecutive();
    }, []);

    const fetchSalesExecutive = async () => {
        try {
            const res = await getSalesexecutive();
            // console.log("fetchSalesExecutive", res?.data);

            setSalesExecutiveData(res?.data);
        } catch (err) {
            console.log('error fetchSalesExecutive : ', err);
        }
    }


    return (
        <View style={styles.container}>
            <Topbar title="Book Appointment" isIconHide={true} />
            <View style={styles.secContainer}>
                <Text style={{ fontSize: 16, fontWeight: "600", color: '#000' }}>Select Hair Specialist </Text>
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
                    // ListEmptyComponent={EmptyDataPromo}
                    style={styles.list}
                    contentContainerStyle={styles.listContents}
                />


                <Button mode="contained" style={styles.btn}
                    onPress={() => setIsSelected(true)}>
                    Next
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    secContainer: {
        marginHorizontal: 14
    },
    fontsty: {
        fontSize: 18,
        fontWeight: 700,
    },
    list: {
        //   paddingTop: 15,
        width: '100%',
    },
    listContents: {
        //alignItems: 'center',
        //  width: '100%',
        //  paddingBottom: 150,
    },
    btn: {
        width: '100%',
        backgroundColor: palette.primaryDark,
        borderRadius: 6,
        marginVertical: 26
    },

});

export default SalesExecutiveScreen;
