import { CatalogDetailRepositoryInterface } from "./catalog-detail.repository.interface";

export async function getProductDetail(repo: CatalogDetailRepositoryInterface, product_id: string) {
	return repo.getProductDetail(product_id)
}