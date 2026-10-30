import { ApiCatalogRepository } from "../infrastructure/api/catalog.repository";
import { GetAllProductsFilterInterface } from "../usecase/catalog.repository.interface";
import { getAllProductsUseCase } from "../usecase/catalog.usecase";

export async function getAllProductsController(filter: GetAllProductsFilterInterface) {
    const repo = new ApiCatalogRepository()

    return getAllProductsUseCase(repo, filter)
}