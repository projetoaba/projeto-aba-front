import Axios from 'axios'
import {logOut} from './auth'

export default function api() {
    const axios = Axios.create({
        baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
        validateStatus: () => true
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