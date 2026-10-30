import { CatalogType } from "../domain/catalog.entity";

export interface GetAllProductsFilterInterface {
    type?: string
    search?: string
    sort?: string
}

export interface CheckoutProductPayloadInterface {
    id: string;
}


export interface CatalogRepositoryInterface {
    getAllProducts: (filter: GetAllProductsFilterInterface) => Promise<CatalogType[]>
    checkoutProduct: (payload: CheckoutProductPayloadInterface) => Promise<void>
}