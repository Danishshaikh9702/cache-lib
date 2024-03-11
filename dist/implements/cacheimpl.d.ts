import { NameSpaceConstants } from "..";
import { StandardResponse, valueType } from "../types";
interface CacheImpl {
    set(namespace: NameSpaceConstants, key: string, value: valueType): Promise<StandardResponse>;
    get(namespace: NameSpaceConstants, key: string): Promise<StandardResponse>;
    delete(namespace: NameSpaceConstants, key: string): Promise<StandardResponse>;
}
export default CacheImpl;
