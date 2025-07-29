export interface IBloackedCollection{
    blocked: IBlocked [];
    totalBloacked: number
}

export interface IBlocked{
    ipAddress: string;
    user: userInfo;
    time: Date;
}
export interface IWhiteList{
    ipAddress: string;
    user: userInfo;

}
export interface IAccessLogs{
    ipAddress: string;
    time: Date;
    user: userInfo;
    url: string;
}

export interface IAttackLogs{
    ipAddress: string;
    user: userInfo;
    type: string;
}
export interface IOwasps {
    owasp: IOwasp[];
}

interface IOwasp {
    nameOfAttack: string;
    percentOfAttack: number;
}
interface userInfo{
    email: string;
    role: string;
}
