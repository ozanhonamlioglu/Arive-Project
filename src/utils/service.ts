import axios from 'axios'
import { BASE_URL } from './config'

export const serviceApi = axios.create({
    baseURL:  BASE_URL ,
    responseType: 'json'
});