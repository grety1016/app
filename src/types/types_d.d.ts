//登录页面Login页面所需要的IUer接口
export interface ILoginUser {
    userName: string;
    userPwd: string;
    token:string;
    code:number;
    errMsg:string;
    reset(): void;
}

 