import { ScrollView, StyleSheet, View } from "react-native";
import Banner from "../../component/Banner/Banner";
import MySearchbar from "../../component/Searchbar/Searchbar";
import UserHeading from "../../component/User/UserHeading";
import Categories from "../../component/Categories/Categories";
import React from "react";
import { getCustomerAddressByCustId } from "../../api/User/userApi";
import { UserContext } from "../../context/user/UserContext";

function HomeScreen(): React.JSX.Element {
    const userContext = React.useContext(UserContext);


    React.useEffect(() => {
        fetchSalesExecutive();
    }, [userContext.customerId]);

    const fetchSalesExecutive = async () => {
        try {
            const res = await getCustomerAddressByCustId(userContext.customerId);
            userContext.setUser(res.data)
            //  setSalesExecutiveData(res?.data);
        } catch (err) {
            console.log('error getCustomerAddressByCustId : ', err);
        }
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.container}>
                <UserHeading />
                <MySearchbar />
                <Banner />
                <Categories />

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
        gap: 14
    },

});

export default HomeScreen;
