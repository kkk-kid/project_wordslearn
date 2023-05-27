import { request } from "./request";

export function getAllBooks() {
    return request({
        method: 'get',
        url: '/wordbook/list'
    })
}

export function getBook(wordbook_id,user_id) {
    return request({
        method: 'get',
        url: '/wordbook/'+wordbook_id + '/' + user_id,
        /*params: {
            wordbook_id,user_id
        }*/
    })
}