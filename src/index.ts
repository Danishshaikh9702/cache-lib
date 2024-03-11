import axios from "axios";
import CacheImpl from "./implements/cacheimpl";
import { StandardResponse, valueType } from "./types";
import cacheUrl from './utils/cacheUrl'

const CACHING_SERVICE_BASE_URL=process.env.BASE_URL+cacheUrl.SERVICE_ROOT_URL
class Cache implements CacheImpl{
    async set(namespace:NameSpaceEnum, key:string, value:valueType):Promise<StandardResponse>{
        const url=CACHING_SERVICE_BASE_URL+cacheUrl.CREATE_CACHE
        const data=(await axios.post(url,{namespace,key,value})).data
        return data
    }
    async get(namespace:NameSpaceEnum, key:string):Promise<StandardResponse>{
        const url=CACHING_SERVICE_BASE_URL+cacheUrl.GET_CACHE.replace(':namespace',namespace as string).replace(':key',key)
        const data=(await axios.get(url)).data
        return data
    }
    async delete(namespace:NameSpaceEnum, key:string,):Promise<StandardResponse>{
        const url=CACHING_SERVICE_BASE_URL+cacheUrl.DELETE_CACHE
        const data=(await axios.delete(url,{data: {namespace,key}})).data
        return data
     }
}
export enum NameSpaceEnum{
    CUSTOMER_DETAILS="CUSTOMER_DETAILS"
}
export const cache=new Cache();