"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = exports.NameSpaceEnum = void 0;
const axios_1 = __importDefault(require("axios"));
const cacheUrl_1 = __importDefault(require("./utils/cacheUrl"));
const CACHING_SERVICE_BASE_URL = process.env.BASE_URL + cacheUrl_1.default.SERVICE_ROOT_URL;
class Cache {
    set(namespace, key, value) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = CACHING_SERVICE_BASE_URL + cacheUrl_1.default.CREATE_CACHE;
            const data = (yield axios_1.default.post(url, { namespace, key, value })).data;
            return data;
        });
    }
    get(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = CACHING_SERVICE_BASE_URL + cacheUrl_1.default.GET_CACHE.replace(':namespace', namespace).replace(':key', key);
            const data = (yield axios_1.default.get(url)).data;
            return data;
        });
    }
    delete(namespace, key) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = CACHING_SERVICE_BASE_URL + cacheUrl_1.default.DELETE_CACHE;
            const data = (yield axios_1.default.delete(url, { data: { namespace, key } })).data;
            return data;
        });
    }
}
var NameSpaceEnum;
(function (NameSpaceEnum) {
    NameSpaceEnum["CUSTOMER_DETAILS"] = "CUSTOMER_DETAILS";
    NameSpaceEnum["DASHBOARD_DETAILS"] = "DASHBOARD_DETAILS";
})(NameSpaceEnum || (exports.NameSpaceEnum = NameSpaceEnum = {}));
exports.cache = new Cache();
