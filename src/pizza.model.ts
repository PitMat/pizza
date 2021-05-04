export interface Pizza{
    name: string;
    price: number | string;
    size: string;
    status:Status;
}

export enum Status{
    Ordered,
    Baked,
    Sold
}

export enum Size{
    small = "small",
    medium = "medium",
    large = "large"
    
}

export type SizeKey = keyof typeof Size;

export interface Cash{
    type: "cash",
    currency: string;
};

export interface DebitCard{
    type: "debit card",
    code: string;
};

export interface OnlinePayament{
    type:"online payament",
    bankAccount: number;
}

export type Payamentmethod = Cash | DebitCard | OnlinePayament;