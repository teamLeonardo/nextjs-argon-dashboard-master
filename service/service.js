import axios from "axios"
import { BASEURL } from "./config"

export const servicio = axios.create({
    baseURL: BASEURL
})

export const get = async (ROUTER_API, params) => (await servicio.get(ROUTER_API, params)).data
export const post = async (ROUTER_API, params) => (await servicio.post(ROUTER_API, params)).data
export const put = async (ROUTER_API, params) => (await servicio.put(ROUTER_API, params)).data
export const delet = async (ROUTER_API, params) => (await servicio.delete(ROUTER_API, params)).data


