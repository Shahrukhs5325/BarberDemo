import { Auth } from "aws-amplify";
import { STORE_ID } from "../../util/constData";
import instance from "../apiInstance";

export const getSalesexecutive = async () => {
    const response = await instance.get(`salesexecutive/getSalesexecutiveList?storeId=${STORE_ID}`)
    return response;
}

export const getCustomerAddressByCustId = async (id: number) => {
    try {
        const data = await Auth.currentSession();
        var userName = data.idToken.payload.phone_number.split('+')

    } catch (err) {
        console.log(err);
        return null;
    }
    const response = await instance.get(`customerflow/getCustomerAddressByCustId?customerId=${userName[1]}`)
    return response;
}