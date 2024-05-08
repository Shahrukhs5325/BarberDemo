import AsyncStorage from '@react-native-async-storage/async-storage';
import { Auth } from 'aws-amplify';
import moment from 'moment';
import React from 'react';


type UserContextProviderType = {
    children?: React.ReactNode;
}

type UserType = {
    address: string;
    cityName: string;
    correlationId: number;
    countryId: number;
    customerId: number;
    customerName: string;
    email: string;
    employeeId: string;
    errorMsg: string;
    phoneNo: string;
    pinCode: string;
    stateId: number;
    statusId: number;
    statusName: number;
    userName: string;
    userTypeId: number;
}


type UserContextType = {
    user?: any;
    setUser?: any;
    location?: any;
    setLocation?: any;
    appLanguage?: any;
    setAppLanguage?: any;
    geoLocation?: any;
    seGeoLocation?: any;
}

export const UserContext = React.createContext({} as any)

export const UserContextProvider = ({ children }: UserContextProviderType) => {

    const [customerId, setCustomerId] = React.useState<any | null>(null);

    const [user, setUser] = React.useState<any | null>(null);
    const [cart, setCart] = React.useState<any | null>();
    const [salesEx, setsalesEx] = React.useState<any | null>();
    const [appDate, setAppDate] = React.useState<any | null>(moment());
    const [appTime, setAppTime] = React.useState<any | null>();



    React.useEffect(() => {
        getCustomerID();
    }, []);


    const getCustomerID = async () => {
        try {
            const data = await Auth.currentSession();
            var userName = data.idToken.payload.phone_number.split('+')
            setCustomerId(userName[1]);

        } catch (err) {
            console.log(err);
            return null;
        }
    }

    return (
        <UserContext.Provider value={{ customerId, user, setUser, cart, setCart, salesEx, setsalesEx, appDate, setAppDate, appTime, setAppTime }}>
            {children}
        </UserContext.Provider>
    );
}

// const userContext = React.useContext(UserContext);
