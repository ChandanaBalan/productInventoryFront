import { commonapi } from "./commonapi"
import { serverurl } from "./serverurl"

export const addproductApi = async(reqBody)=>{
    return await commonapi('POST', `${serverurl}/products`, reqBody)
}

export const getProductApi = async()=>{
    return await commonapi('GET',`${serverurl}/products`,"")
}

export const deleteApi = async()=>{
    return await commonapi('DELETE',`${serverurl}/products/${id}`,{})
}