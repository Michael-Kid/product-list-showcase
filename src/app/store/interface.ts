import { IProduct } from "../../entities/product/interface";

export type StoreState = {
    products: IProduct[];
    listProducts: IProduct[];
}

export type Action = {
    type: string;
    payload: IProduct;
}