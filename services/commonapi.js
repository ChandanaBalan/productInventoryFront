import axios from "axios"

export const commonapi = async(httprequest, url, reqBody)=>{
    const reqConfig = {
        method: httprequest,
        url,
        data: reqBody,
        headers:{"Content-Type":"application/json"}
    }

    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=> {
        return err
    })
}