import axios from "axios"

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://172.16.6.130:8084',
        timeout: 5000,
        
    })

    instance.interceptors.request.use(config => {
        //config.headers['token'] = window.localStorage.getItem('Authorization')
        let token = window.localStorage.getItem('Authorization')
        //config.headers.accessToken = token;
        if(token){
            config.headers['token'] = token;
        }
        return config
    },err => {
        console.log(err);
    })

    instance.interceptors.response.use(res =>{
        return res.data;
    },err => {
        console.log(err);
    })

    return instance(config)
}

export function request1(config) {
    const instance = axios.create({
        baseURL: 'http://172.16.6.130:8084',
        timeout: 5000,
        
    })

    instance.interceptors.request.use(config => {
        
        return config
    },err => {
        console.log(err);
    })

    instance.interceptors.response.use(res =>{
        return res.data;
    },err => {
        console.log(err);
    })

    return instance(config)
}