import { STORE_ID, USER_NAME } from "../../util/constData";
import instance from "../apiInstance";


export const getCategory = async () => {
    const response = await instance.get(`category/getCategory?lastUpdated=0&pageNumber=0&pageSize=0&storeId=${STORE_ID}`);
    return response;
};

export const getproductlist = async () => {
    const response = await instance.get(`client/productlist/${USER_NAME}`);
    return response;
};

export const getproductlistByCategory = async (catId: number) => {
    const response = await instance.get(`client/productlist/${USER_NAME}/${catId}`);
    return response;
};