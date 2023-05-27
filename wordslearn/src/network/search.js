import {request} from "./request"

export function postSearch(word){
    return request({
        method: 'post',
        url: '/word/search/'+word,
        
    })
}