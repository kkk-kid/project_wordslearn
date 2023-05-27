import { request } from "./request";

export function getHistoryTest(user_id) {
    return request({
        url: '/test/' + user_id,
        method: 'get',
        params: {
            user_id
        }
    })
}

export function postTest(englishChooseChineseRatio,testNumber,userId,wordbookId,judgingCondition) {
    return request({
        url: '/test/start',
        method: 'post',
        data: {
            englishChooseChineseRatio,testNumber,userId,wordbookId,judgingCondition
        }
    })
}

export function postTestResult(userId,testId,testQuestionsDTOS) {
    return request({
        url: '/test/end',
        method: 'post',
        data: {
            userId,testId,testQuestionsDTOS
        }
    })
}