import Axios from 'axios'
// import {logOut} from './auth'

export function api() {
    const token = localStorage.getItem('token')
    const axios = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        validateStatus: () => true,
        headers : {'Authorization': token && `Bearer ${token}`}      
    })

    return axios
}