import axios from 'axios';
import { HOST } from '../apiConfig';

const axiosAuth = () => {

    const token = localStorage.getItem('jwt')
    return axios.create({
        baseURL: HOST,
        headers: {
            authorization: token
        }
    })
}
export default axiosAuth;