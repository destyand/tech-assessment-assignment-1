import { ApiCatalogRepository } from "../infrastructure/api/catalog.repository";
import { CheckoutProductPayloadInterface, GetAllProductsFilterInterface } from "../usecase/catalog.repository.interface";
import { checkoutProductUseCase, getAllProductsUseCase } from "../usecase/catalog.usecase";

export async function getAllProductsController(filter: GetAllProductsFilterInterface) {
    const repo = new ApiCatalogRepository()

    return getAllProductsUseCase(repo, filter)
}

export async function checkoutProductController(payload: CheckoutProductPayloadInterface) {
    const repo = new ApiCatalogRepository()

    return checkoutProductUseCase(repo, payload)
}