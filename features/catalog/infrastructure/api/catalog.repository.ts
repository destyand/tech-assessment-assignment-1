import { CatalogType } from "../../domain/catalog.entity";
import { CatalogRepositoryInterface, GetAllProductsFilterInterface } from "../../usecase/catalog.repository.interface";
import { GetAllProductsResponse } from "./catalog.dto";
import { catalogMapper } from "./catalog.mapper";

export class ApiCatalogRepository implements CatalogRepositoryInterface {
    async getAllProducts(filter: GetAllProductsFilterInterface): Promise<CatalogType[]> {

        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/products?search=${filter.search}&type=${filter.type}&sort=${filter.sort}`
        const res = await fetch(url)
        const result = await res.json() as GetAllProductsResponse


        return result.data.map(catalogMapper.toDomain)
    }

}