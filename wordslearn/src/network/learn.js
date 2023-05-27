import { request } from "./request";

export function postLearnStart(userid,rememberNumber,wordbookId,judgingCondition) {
    return request({
        method: 'post',
        url: '/remember/start',
        data: {
            userid,rememberNumber,wordbookId,judgingCondition
        }
    })
}

export function postLearnResult(userId,rememberWordDTOList    ) {
    return request({
        method: 'post',
        url: '/remember/end',
        data: {
            userId,rememberWordDTOList
        }
    })
}

