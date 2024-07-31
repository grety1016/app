import type { ILoginUser } from '@/types/types_d';

 

//登录页面Login页面所需要的user类型
export class User implements ILoginUser {
    userName: string;
    userPwd: string;
    token:string;
    code:number;
    errMsg:string;
    constructor() {
        this.userName = '';
        this.userPwd = '';
        this.token = '';
        this.errMsg = '';
    }
    reset(): void {
        this.userName = '';
        this.userPwd = '';
        this.token = '';
        this.errMsg = '';
    }
}