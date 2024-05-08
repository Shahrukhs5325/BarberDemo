import instance from "../apiInstance";


export const upsertBBCustomerOrder = async (payload: any) => {
    const response = await instance.post(`/customerflow/web/upsertBBCustomerOrder`, payload);
    return response;
};

export const allCustomerOrdersByCustomerId = async (id: any) => {
    const response = await instance.post(`customerflow/web/allCustomerOrdersByCustomerId?customerId=${id}&orderStatus=pending`);
    return response;
};

