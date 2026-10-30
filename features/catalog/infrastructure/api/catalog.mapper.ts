import { CatalogType } from "../../domain/catalog.entity";
import { ProductDto } from "./catalog.dto";

export const catalogMapper = {
    toDomain: (dto: ProductDto): CatalogType => {
        const id = dto.id.toString()
        return {
            id,
            name: dto.name,
            brand: dto.brand,
            type: dto.type,
            storage: {
                capacity: parseInt(dto.storage),
                unit: "GB"
            },
            price: {
                amount: dto.price,
                currency: {
                    code: "IDR",
                    symbol: "Rp"
                }
            },
            image: dto.image,
            color: dto.color,
            tag: dto.tag
        }
    }
}