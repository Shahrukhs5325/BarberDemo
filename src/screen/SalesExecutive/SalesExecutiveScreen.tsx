import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Topbar from "../../component/TopBar/Topbar";
import { getSalesexecutive } from "../../api/User/userApi";
import { Button, Chip } from "react-native-paper";
import { palette } from "../../theme/palette";
import { useNavigation } from "@react-navigation/native";
import SalesExecutiveItem from "../../component/SalesExecutive/SalesExecutiveItem";
import ReactNativeCalendarStrip from "react-native-calendar-strip";
import { APP_TIME } from "../../util/constData";
import { UserContext } from "../../context/user/UserContext";
import moment from "moment";

type Props = {

};

const SalesExecutiveScreen: React.FC<Props> = () => {
    const navigation = useNavigation<any>();
    const userContext = React.useContext(UserContext);

    const [salesExecutiveData, setSalesExecutiveData] = React.useState(null);
    const [isSelected, setIsSelected] = React.useState(false);
    const [date, setDate] = React.useState(moment());




    React.useEffect(() => {
        fetchSalesExecutive();
    }, []);

    const fetchSalesExecutive = async () => {
        try {
            const res = await getSalesexecutive();
            console.log("fetchSalesExecutive", res?.data);

            setSalesExecutiveData(res?.data);
        } catch (err) {
            console.log('error fetchSalesExecutive : ', err);
        }
    }


    const selectSalesExHAndler = (item: string) => {
        userContext.setAppTime(item);
    }

    const onDateSelected = (d: any) => {
        setDate(d.format('YYYY-MM-DD'))
        userContext.setAppDate(d.format('YYYY-MM-DD'));
    }


    return (
        <ScrollView showsVerticalScrollIndicator={false}>
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
                </View>

                <View style={styles.secContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: '#000' }}>Select Date</Text>
                    <ReactNativeCalendarStrip
                        selectedDate={date}
                        minDate={new Date()}
                        onDateSelected={onDateSelected}
                        style={{ height: 110, paddingTop: 14 }}
                        highlightDateNameStyle={{ color: 'white' }}
                        highlightDateNumberStyle={{ color: 'white' }}
                        highlightDateContainerStyle={{ backgroundColor: palette.primaryDark }}
                    />
                </View>
                <View style={styles.secContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: '#000' }}>Available Slots</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.chipContainer}>
                            {APP_TIME.map((item, i) => (
                                <Chip style={userContext.appTime && userContext.appTime === item ? styles.selChip : styles.chip} onPress={() => selectSalesExHAndler(item)} key={i} >{item}</Chip>
                            ))}
                        </View>
                    </ScrollView>
                    <Button mode="contained" style={styles.btn}
                        onPress={() => setIsSelected(true)}>
                        Book
                    </Button>
                </View>

            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    chipContainer: {
        marginVertical: 10,
        flexDirection: 'row',
        gap: 8
    },
    chip: {
        width: 90,
        backgroundColor: palette.primaryLight
    },
    selChip: {
        width: 90,
        backgroundColor: palette.primaryDark
    },
    secContainer: {
        marginHorizontal: 14,
        marginBottom: 20
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
