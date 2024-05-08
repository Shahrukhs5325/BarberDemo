import { STORE_ID } from "../../util/constData";
import instance from "../apiInstance";

export const getSalesexecutive = async () => {
    const response = await instance.get(`salesexecutive/getSalesexecutiveList?storeId=${STORE_ID}`)
    return response;
}