import axios from "axios";
import CacheImpl from "./implements/cacheimpl";
import { StandardResponse, valueType } from "./types";
import cacheUrl from './utils/cacheUrl'

const CACHING_SERVICE_BASE_URL=process.env.BASE_URL+cacheUrl.SERVICE_ROOT_URL
class Cache implements CacheImpl{
    async set(namespace:NameSpaceEnums, key:string, value:valueType):Promise<StandardResponse>{
        const url=CACHING_SERVICE_BASE_URL+cacheUrl.CREATE_CACHE
        const response=(await axios.post(url,{namespace,key,value})).data
        return response?.data 
        
    }
    async get(namespace:NameSpaceEnums, key:string):Promise<StandardResponse>{
        const url=CACHING_SERVICE_BASE_URL+cacheUrl.GET_CACHE.replace(':namespace',namespace as string).replace(':key',key)
        const response=(await axios.get(url)).data
        return response?.data 
    }
    async delete(namespace:NameSpaceEnums, key:string,):Promise<StandardResponse>{
        const url=CACHING_SERVICE_BASE_URL+cacheUrl.DELETE_CACHE
        const response=(await axios.delete(url,{data: {namespace,key}})).data
        return response?.data 
     }
}
export enum NameSpaceEnums{
    SECURE_KEY="SECURE_KEY",
    CUSTOMER_UID="CUSTOMER_UID",
    APP_KEY="APP_KEY"

}
export const cache=new Cache();