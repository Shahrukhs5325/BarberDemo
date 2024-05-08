import instance from "../apiInstance";


export const upsertBBCustomerOrder = async (payload: any) => {
    const response = await instance.post(`/customerflow/web/upsertBBCustomerOrder`, payload);
    return response;
};

export const allCustomerOrdersByCustomerId = async (id: any,type:string) => {    
    const response = await instance.get(`customerflow/allCustomerOrdersByCustomerIdwithName?customerId=${id}&orderStatus=${type}`);
    return response;
};

