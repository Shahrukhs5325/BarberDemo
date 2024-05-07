import { ScrollView, StyleSheet, View } from "react-native";
import Banner from "../../component/Banner/Banner";
import MySearchbar from "../../component/Searchbar/Searchbar";
import UserHeading from "../../component/User/UserHeading";
import Categories from "../../component/Categories/Categories";

function HomeScreen(): React.JSX.Element {


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
