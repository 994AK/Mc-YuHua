import axios, {AxiosInstance} from 'axios'

const instance: AxiosInstance = axios.create({
    baseURL: 'http://159.75.79.184:7001',
    timeout: 10000,
})


export const  post =  (
    (url: string, data?: object,): Promise<any> => {
        return new Promise((resolve: any, reject) => {
            instance.post(url, data, {
                headers: {
                    'Content-Type': 'application/json',
                    'token': localStorage.getItem('Users')
                }
            }).then(r => resolve(r.data)).catch(err => reject(err))
        })
    }
)
