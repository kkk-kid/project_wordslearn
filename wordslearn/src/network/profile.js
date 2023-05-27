import { request } from "./request";

export function getProfileInfo(){
    return request({
        method: 'get',
        url: '/user/userInfo'
    })
}

export function putProfileInfo(id,gender,phonenumber,mail) {
    return request({
        method: 'put',
        url: '/user/userInfo',
        data: {
            id,gender,phonenumber,mail
        }
    })
}