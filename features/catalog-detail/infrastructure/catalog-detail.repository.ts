import { CatalogDetailType } from "../domain/catalog-detail.entity"
import { CatalogDetailRepositoryInterface } from "../usecase/catalog-detail.repository.interface"
import { GetProductDetailResponse } from "./catalog-detail.dto"
import { catalogDetailMapper } from "./catalog-detail.mapper"

export class ApiCatalogDetailRepository implements CatalogDetailRepositoryInterface {
	async getProductDetail(product_id: string): Promise<CatalogDetailType> {

		const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/products/${product_id}`
		const res = await fetch(url)
		const result = await res.json() as GetProductDetailResponse


		return catalogDetailMapper.toDomain(result.data)
	}

}