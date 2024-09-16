import Axios from 'axios'
import {logOut} from './auth'

export function api() {
    const token = localStorage.getItem('token')
    const axios = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        validateStatus: () => true,
        headers : {'Authorization': token && `Bearer ${token}`}
        // withCredentials: true
    })

    axios.interceptors.response.use(response => response, error => {
        if (error.response.status === 401) {
            logOut()

            return Promise.reject()
        }

        return Promise.reject(error)
    })

    return axios
}

export function apiLogged() {    
    const axios = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        validateStatus: () => true,
        headers: {}
        // withCredentials: true
    })

    axios.interceptors.response.use(response => response, error => {
        if (error.response.status === 401) {
            logOut()

            return Promise.reject()
        }

        return Promise.reject(error)
    })

    return axios
}