import { request1 } from "./request";

export function postLogin(username,password){
    return request1({
        url: '/login',
        method: 'post',
        data: {
            username,password
        }
    })
}