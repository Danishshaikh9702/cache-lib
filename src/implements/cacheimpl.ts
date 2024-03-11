import { NameSpaceEnum } from "..";
import { StandardResponse, valueType } from "../types";
// not required
interface CacheImpl{
     set(namespace:NameSpaceEnum, key:string, value:valueType):Promise<StandardResponse>
     get(namespace:NameSpaceEnum, key:string):Promise<StandardResponse>
     delete(namespace:NameSpaceEnum, key:string):Promise<StandardResponse>
}
export default CacheImpl