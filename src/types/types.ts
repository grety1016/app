import type { IUser } from '@/types/types_d';

//登录页面Login页面所需要的user类型
export class User implements IUser {
    userName: string;
    userPwd: string;
    constructor(userName: string, userPwd: string) {
        this.userName = userName;
        this.userPwd = userPwd;
    }
    reset(): void {
        this.userName = '';
        this.userPwd = '';
    }
}