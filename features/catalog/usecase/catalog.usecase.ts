import { CatalogRepositoryInterface, CheckoutProductPayloadInterface, GetAllProductsFilterInterface } from "./catalog.repository.interface";

export async function getAllProductsUseCase(repo: CatalogRepositoryInterface, filter: GetAllProductsFilterInterface) {
    return repo.getAllProducts(filter)
}

export async function checkoutProductUseCase(repo: CatalogRepositoryInterface, payload: CheckoutProductPayloadInterface) {
    return repo.checkoutProduct(payload)
}