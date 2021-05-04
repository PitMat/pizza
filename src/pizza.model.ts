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