//登录页面Login页面所需要的IUer接口
export interface IUser {
    userName: string;
    userPwd: string;
    reset(): void;
}

 