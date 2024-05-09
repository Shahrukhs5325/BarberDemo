import { Auth } from "aws-amplify";
import instance from "../apiInstance";


export const upsertBBCustomerOrder = async (payload: any) => {
    const response = await instance.post(`/customerflow/web/upsertBBCustomerOrder`, payload);
    return response;
};

export const allCustomerOrdersByCustomerId = async (id: any, type: string) => {
    try {
        const data = await Auth.currentSession();
        var userName = data.idToken.payload.phone_number.split('+')

    } catch (err) {
        console.log(err);
        return null;
    }
    
    const response = await instance.get(`customerflow/allCustomerOrdersByCustomerIdwithName?customerId=${userName[1]}&orderStatus=${type}`);
    return response;
};

