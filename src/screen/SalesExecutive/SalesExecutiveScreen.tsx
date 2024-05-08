import React from "react";
import { StyleSheet, View } from "react-native";
import Products from "../../component/Product/Products";
import Topbar from "../../component/TopBar/Topbar";

type Props = {

};

const SalesExecutiveScreen: React.FC<Props> = () => {


    return (
        <View style={styles.container}>
            <Topbar title="Sales Executive" isIconHide={true} />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },

});

export default SalesExecutiveScreen;
