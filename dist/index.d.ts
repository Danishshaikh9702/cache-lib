import CacheImpl from "./implements/cacheimpl";
import { StandardResponse, valueType } from "./types";
declare class Cache implements CacheImpl {
    set(namespace: NameSpaceConstants, key: string, value: valueType): Promise<StandardResponse>;
    get(namespace: NameSpaceConstants, key: string): Promise<StandardResponse>;
    delete(namespace: NameSpaceConstants, key: string): Promise<StandardResponse>;
}
export declare class NameSpaceConstants {
    static readonly CUSTOMER_DETAILS: string;
}
export declare const cache: Cache;
export {};
