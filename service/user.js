import { ROUTER_API } from "./config";
import { get, put, delet, post } from "./service";

export const user = {
    get: (params) => get(ROUTER_API.USER, params),
    post: (params) => post(ROUTER_API.USER, params),
    put: (params) => put(ROUTER_API.USER, params),
    delete: (params) => delet(ROUTER_API.USER, params),
    auth: (params) => post(ROUTER_API.USER_AUTH, params)
}