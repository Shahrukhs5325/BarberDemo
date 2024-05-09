import React from "react";
import { FlatList, ScrollView, StyleSheet, Text, View } from "react-native";
import Topbar from "../../component/TopBar/Topbar";
import { getSalesexecutive } from "../../api/User/userApi";
import { Button, Chip } from "react-native-paper";
import { palette } from "../../theme/palette";
import { StackActions, useNavigation } from "@react-navigation/native";
import SalesExecutiveItem from "../../component/SalesExecutive/SalesExecutiveItem";
import ReactNativeCalendarStrip from "react-native-calendar-strip";
import { APP_TIME, STORE_ID, STORE_NAME, USER_ID, USER_NAME } from "../../util/constData";
import { UserContext } from "../../context/user/UserContext";
import moment from "moment";
import { getUTCDate, showSnackbar } from "../../util/constFunctions";
import { upsertBBCustomerOrder } from "../../api/Order/orderApi";
import EmptyData from "../../component/Empty/EmptyData";

type Props = {

};

const SalesExecutiveScreen: React.FC<Props> = () => {
    const navigation = useNavigation<any>();
    const userContext = React.useContext(UserContext);

    const [salesExecutiveData, setSalesExecutiveData] = React.useState(null);
    const [isLoading, setIsLoading] = React.useState(false);
    const [date, setDate] = React.useState(moment());
    const [errors, setErrors] = React.useState({
        appDate: "",
        appTime: "",
        salesexecutive: ""
    });



    React.useEffect(() => {
        fetchSalesExecutive();
    }, []);

    React.useEffect(() => {
        setErrors({ ...errors, salesexecutive: "" });
    }, [userContext.salesEx]);

    const fetchSalesExecutive = async () => {
        try {
            const res = await getSalesexecutive();
            setSalesExecutiveData(res?.data);
        } catch (err) {
            console.log('error fetchSalesExecutive : ', err);
        }
    }


    const selectSalesExHAndler = (item: string) => {
        userContext.setAppTime(item);
        setErrors({ ...errors, appTime: "" });
    }

    const onDateSelected = (d: any) => {
        setDate(d.format('YYYY-MM-DD'))
        userContext.setAppDate(d.format('YYYY-MM-DD'));
        setErrors({ ...errors, appDate: "" });
    }


    const submit = async () => {
        if (!userContext.salesEx) {
            setErrors({ ...errors, salesexecutive: "Select hair specialist " });
            return false;
        } else if (!userContext.appDate) {
            setErrors({ ...errors, appDate: "Select appointment date" });
            return false;
        } else if (!userContext.appTime) {
            setErrors({ ...errors, appTime: "Select appointment slot" });
            return false;
        }

        setIsLoading(true);
        const custAddress = userContext.user.length && userContext.user[0]

        const orderStatusObj = [{
            "comments": "",
            "created_at": "",
            "customerId": userContext.customerId,
            "statusId": "1",
            "stausName": "Pending",
            "userName": USER_ID,
        }];

        let orderDetails: { numbers: any; cart: any; cartPrice: any; categoryId: any; inventoryManage: any; brandId: any; productId: any; subCategoryId: any; sellingPrice: any; quantity: any; priceIncludeTax: any; notes: any; storeId: any; productName: any; taxes: any; discounts: any; unitName: any; isMeasurable: any; imageId: any; imageUrl: any; itemDiscount: any; itemTax: any; orderQuantity: string; stock: number; }[] = []

        let grandTotal = 0;
        userContext.cart && userContext.cart.map((item) => {
            orderDetails.push({
                numbers: item.numbers,
                cart: item.cart,
                cartPrice: item.cartPrice,
                categoryId: item.categoryId,
                inventoryManage: item.inventoryManage,
                brandId: item.brandId,
                productId: item.productId,
                subCategoryId: item.subCategoryId,
                sellingPrice: item.sellingPrice,
                quantity: item.quantity,
                priceIncludeTax: item.priceIncludeTax,
                notes: item.notes,
                storeId: item.storeId,
                productName: item.productName,
                taxes: item.taxes,
                discounts: item.discounts,
                unitName: item.unitName,
                isMeasurable: item.isMeasurable,
                imageId: item.imageId,
                imageUrl: item.imageUrl,
                itemDiscount: item.discounts,
                itemTax: item.taxes,
                orderQuantity: "1",
                stock: 1,
            });
            grandTotal = item.sellingPrice + grandTotal
        })

        var postData = {
            salesExecutiveId: userContext.salesEx.id,
            salesExecutiveName: userContext.salesEx.name,
            sales_executiveId: userContext.salesEx.id,
            appointmentDateTime: userContext.appDate,
            appointmentSlot: userContext.appTime,
            presImgFlag: false,
            storeId: STORE_ID,
            saleDate: moment(new Date()).format('YYYY-MM-DD'),
            address: '',
            city: custAddress.city ? custAddress.city : "",
            clientLastUpdated: 0,
            country: custAddress.country ? custAddress.country : "",
            created_at: "",
            currencyName: "SAR",
            customerId: userContext.customerId,
            dateReport: "2020-06-07T07:46:24.924Z",
            deliveryDate: "2020-06-10",
            discount: 0,
            email: '',
            finaltotalAmount: grandTotal,
            lastUpdate: getUTCDate(),
            modeofpayment: "Cash",
            notes: "",
            orderId: 0,
            orderType: "Online",
            paymentType: "Cash",
            pinCode: custAddress.pinCode ? custAddress.pinCode : "",
            promoCodeId: 0,
            scheduleDeliveryTime: "2020-06-10",
            sentNotification: 0,
            state: custAddress.state ? custAddress.state : "",
            status: "Pending",
            storeName: STORE_NAME,
            totalBalance: 0,
            totalPayment: 0,
            typeName: "Type",
            updatedBy: "ABC",
            orderNo: 0,
            userName: USER_ID,
            phone: "+" + userContext.customerId,
            name: "Shahrukh",
            deliveryAddress: "",
            latitude: 24.7136,
            longitude: 46.6753,
            orderStatus: orderStatusObj,
            orderTime: '' + getUTCDate(),
            totalAmount: grandTotal,
            orderDetails: orderDetails,
            comments: "",
            homeDelivery: false
        }

        try {
            const res = await upsertBBCustomerOrder(postData);

            console.log("upsertBBCustomerOrder", res.data);
            // showSnackbar("Appointment book successfully", "success");
            userContext.setAppTime(null);
            userContext.setAppDate(moment());
            navigation.dispatch(StackActions.replace("SuccessScreen"));
            setIsLoading(false);
        } catch (err) {
            setIsLoading(false);
            console.log('error fetchSalesExecutive : ', err);
        }
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
                        ListEmptyComponent={EmptyData}
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

                        daySelectionAnimation={{ type: 'background', duration: 300, highlightColor: '#FFF' }}
                        calendarHeaderStyle={{ color: 'black' }}
                        calendarColor={'#FFF'}
                        dateNumberStyle={{ color: 'black' }}
                        dateNameStyle={{ color: 'black' }}
                        iconContainer={{ flex: 0.1 }}

                    />
                </View>
                <View style={styles.secContainer}>
                    <Text style={{ fontSize: 16, fontWeight: "600", color: '#000' }}>Available Slots</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.chipContainer}>
                            {APP_TIME.map((item, i) => (
                                <Chip style={userContext.appTime && userContext.appTime === item ? styles.selChip : styles.chip} selectedColor="#FFF" onPress={() => selectSalesExHAndler(item)} key={i} >{item}</Chip>
                            ))}
                        </View>
                    </ScrollView>


                </View>

                <View style={styles.secContainer}>

                    {errors.salesexecutive ?
                        <Text style={{ fontSize: 14, color: "red" }}>{errors.salesexecutive}</Text> :
                        errors.appDate ?
                            <Text style={{ fontSize: 14, color: "red" }}>{errors.appDate}</Text> :
                            errors.appTime ?
                                <Text style={{ fontSize: 14, color: "red" }}>{errors.appTime}</Text> : null}



                    <Button mode="contained" style={styles.btn} textColor="#FFF"
                        loading={isLoading}
                        onPress={() => submit()}>
                        Book Appointment
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
        width: 100,
        backgroundColor: palette.primaryLight
    },
    selChip: {
        width: 100,
        backgroundColor: palette.primaryDark,
    },
    secContainer: {
        marginHorizontal: 14,
        marginBottom: 20
    },
    fontsty: {
        fontSize: 18,
        fontWeight: 700,
        color: '#000'
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
        marginVertical: 10
    },

});

export default SalesExecutiveScreen;
