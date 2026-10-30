import { CatalogDetailType } from "../domain/catalog-detail.entity";

export interface CatalogDetailRepositoryInterface {
	getProductDetail: (product_id: string) => Promise<CatalogDetailType>
}