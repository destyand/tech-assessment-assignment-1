import { CatalogRepositoryInterface, GetAllProductsFilterType } from "./catalog.repository.interface";

export async function getAllProductsUseCase(repo: CatalogRepositoryInterface, filter: GetAllProductsFilterType) {
    return repo.getAllProducts(filter)
}