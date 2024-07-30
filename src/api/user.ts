//封装用户讲求的模块
import {request,source,CancelToken} from '@/utils/request';
import { User } from '../types/types';
import { AxiosResponse } from 'axios';
export const onLogin = (data:User):Promise<AxiosResponse<User>>  =>{
    return request({
        url: '/user/login',
        method: 'post',
        data,
    });
};