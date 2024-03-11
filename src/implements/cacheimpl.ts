import { NameSpaceEnums } from "..";
import { StandardResponse, valueType } from "../types";
// not required
interface CacheImpl{
     set(namespace:NameSpaceEnums, key:string, value:valueType):Promise<StandardResponse>
     get(namespace:NameSpaceEnums, key:string):Promise<StandardResponse>
     delete(namespace:NameSpaceEnums, key:string):Promise<StandardResponse>
}
export default CacheImpl