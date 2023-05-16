export interface IProduct {
    id: number;
    name: string | undefined;
    price: string | undefined;
    image: string;
    description?: string;
    count: number;
}