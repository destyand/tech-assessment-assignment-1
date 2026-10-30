import { describe, it, expect } from "vitest";
import { catalogMapper } from "../infrastructure/api/catalog.mapper";
import { ProductDto } from "../infrastructure/api/catalog.dto";

describe("catalogMapper", () => {
    it("should correctly map ProductDto to CatalogType domain entity", () => {
        const dto: ProductDto = {
            id: "1",
            name: "Smartphone Pro",
            brand: "Apple",
            type: "Smartphones",
            price: 15000000,
            color: "Space Gray",
            tone: "dark",
            tag: "NEW ARRIVAL",
            storage: "256GB",
            screen: "6.1 inch",
            chip: "A16",
            camera: "48MP",
            battery: "3200mAh",
            os: "iOS",
            image: "https://example.com/phone.jpg",
        };

        const result = catalogMapper.toDomain(dto);

        expect(result.id).toBe("1");
        expect(result.name).toBe("Smartphone Pro");
        expect(result.brand).toBe("Apple");
        expect(result.storage).toEqual({
            capacity: 256,
            unit: "GB",
        });
        expect(result.price).toEqual({
            amount: 15000000,
            currency: {
                code: "IDR",
                symbol: "Rp",
            },
        });
        expect(result.image).toBe("https://example.com/phone.jpg");
        expect(result.color).toBe("Space Gray");
        expect(result.tag).toBe("NEW ARRIVAL");
    });
});
