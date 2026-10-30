import { CatalogType } from "../domain/catalog.entity";

export interface GetAllProductsFilterInterface {
    type?: string
    search?: string
    sort?: string
}

export type GetAllProductsFilterType = GetAllProductsFilterInterface;

export interface CatalogRepositoryInterface {
    getAllProducts: (filter: GetAllProductsFilterInterface) => Promise<CatalogType[]>
}