"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cacheUrl = {
    SERVICE_ROOT_URL: '/caching-service/api/v1',
    CREATE_NAME_SPACE: '/create-namespace',
    CREATE_CACHE: '/create-cache',
    GET_CACHE: '/:namespace/:key',
    DELETE_CACHE: '/delete-cache'
};
exports.default = cacheUrl;
