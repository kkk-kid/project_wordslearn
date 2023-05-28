import { request } from "./request";

export function getProfileInfo(){
    return request({
        method: 'get',
        url: '/user/userInfo'
    })
}

export function putProfileInfo(id,gender,phone,email) {
    return request({
        method: 'put',
        url: '/user/userInfo',
        data: {
            id,gender,phone,email
        }
    })
}