import { request } from "./request";

export function getWordMutidata(wordid){
    return request({
        method: 'get',
        url: '/word/'+wordid
    })
}

export function getWordLearnPlan(planid) {
    return request({
        method: 'get',
        url: '/userPlan/'+planid
    })
}
