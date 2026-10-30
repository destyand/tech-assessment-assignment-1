import { ApiCatalogDetailRepository } from "../infrastructure/catalog-detail.repository"
import { getProductDetail } from "../usecase/catalog-detail.usecase"

export async function getProductDetailController(product_id: string) {
	const repo = new ApiCatalogDetailRepository()

	return getProductDetail(repo, product_id)
}