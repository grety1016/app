//封装用户讲求的模块
import {request} from '@/utils/request';
export const login = (data) =>{
    return request({
        url: '/user/login',
        method: 'post',
        data,
    });
};