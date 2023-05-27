import { request } from "./request";


export function getWordLearnPlan(user_plan_id) {
    return request({
        method: 'get',
        url: '/userPlan/'+user_plan_id
    })
}

export function postLearnPlan(userId,startDate,totalDays,wordsPerDay,wordbookId) {
    return request({
        method: 'post',
        url: '/userPlan/make',
        data: {
            userId,startDate,totalDays,wordsPerDay,wordbookId
        }
    })
}