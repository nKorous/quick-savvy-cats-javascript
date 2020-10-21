export interface User {
    _id: string
    guid: string;
    isActive: boolean;
    balance: number;
    picture: string;
    age: number;
    eyeColor: string;
    name: { first: string, last: string },
    company: string,
    email: string,
    password: string,
    phone: string,
    address: string,
    transactions: Array<Transactions>,
    logins: Array<Login>
}

export interface Transactions {
    transactionId: string;
    transactionName: string;
    transactionAmount: number;
    transactionDate: Date;
    transactionType: 'CREDIT' | 'EXPENSE'
}

export interface Login {
    loginId: string;
    timeStamp: Date;
}
