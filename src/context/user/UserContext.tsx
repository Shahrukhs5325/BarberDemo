import AsyncStorage from '@react-native-async-storage/async-storage';
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

    const [user, setUser] = React.useState<any | null>(null);
    const [cart, setCart] = React.useState<any | null>(null);



    return (
        <UserContext.Provider value={{ user, setUser, cart, setCart }}>
            {children}
        </UserContext.Provider>
    );
}

// const userContext = React.useContext(UserContext);
