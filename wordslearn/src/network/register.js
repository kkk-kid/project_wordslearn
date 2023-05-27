import { request1 } from "./request";

export function postRegister(username,password,email,phone,gender) {
    return request1({
        url: '/user/register',
        method: 'post',
        data: {
            username,
            password,
            email,
            phone,
            gender
        }
    })
}