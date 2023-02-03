import { get, post } from '../../src/utils/request'

export function getData(data) {
    return get({
        url: '/admin/info',
        method: 'get',
        headers: {
            "Content-Type": "application/json;charset=UTF-8",
          },
        // data: {
        //     userId: 1,
        //     userName: '',
        //     userSupNum: 1,
        //     userNeedNum: 2,

        // }
    })

}