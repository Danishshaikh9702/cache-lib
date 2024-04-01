import CacheImpl from "./implements/cacheimpl";
import { StandardResponse, valueType } from "./types";
declare class Cache implements CacheImpl {
    set(namespace: NameSpaceEnums, key: string, value: valueType): Promise<StandardResponse>;
    get(namespace: NameSpaceEnums, key: string): Promise<StandardResponse>;
    delete(namespace: NameSpaceEnums, key: string): Promise<StandardResponse>;
}
export declare enum NameSpaceEnums {
    SECURE_KEY = "SECURE_KEY",
    CUSTOMER_UID = "CUSTOMER_UID",
    APP_KEY = "APP_KEY"
}
export declare const cache: Cache;
export {};
