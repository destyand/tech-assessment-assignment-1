import { CatalogDetailType } from "../domain/catalog-detail.entity";
import { ProductDetailDto } from "./catalog-detail.dto";

export const catalogDetailMapper = {
	toDomain: (dto: ProductDetailDto): CatalogDetailType => {
		const id = dto.id.toString()
		return {
			id: dto.id,
			name: dto.name,
			brand: dto.brand,
			type: dto.type,
			price: dto.price,
			color: dto.color,
			tone: dto.tone,
			tag: dto.tag,
			storage: dto.storage,
			screen: dto.screen,
			chip: dto.chip,
			camera: dto.camera,
			battery: dto.battery,
			os: dto.os,
			image: dto.image,
			stock: dto.stock,
		}
	}
}