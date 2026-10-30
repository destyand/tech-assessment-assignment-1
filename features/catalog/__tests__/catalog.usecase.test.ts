import { describe, it, expect, vi } from "vitest";
import { getAllProductsUseCase } from "../usecase/catalog.usecase";
import { CatalogRepositoryInterface, GetAllProductsFilterInterface } from "../usecase/catalog.repository.interface";
import { CatalogType } from "../domain/catalog.entity";

describe("getAllProductsUseCase", () => {
    it("should pass filter to repository and return products", async () => {
        const mockProducts: CatalogType[] = [
            {
                id: "1",
                name: "Product A",
                brand: "Brand A",
                type: "Smartphones",
                tag: "NEW",
                color: "Black",
                image: "http://example.com/a.jpg",
                storage: { capacity: 128, unit: "GB" },
                price: { amount: 10000000, currency: { code: "IDR", symbol: "Rp" } },
            },
        ];

        const mockRepo: CatalogRepositoryInterface = {
            getAllProducts: vi.fn().mockResolvedValue(mockProducts),
        };

        const filter: GetAllProductsFilterInterface = {
            search: "phone",
            type: "Smartphones",
            sort: "low",
        };

        const result = await getAllProductsUseCase(mockRepo, filter);

        expect(mockRepo.getAllProducts).toHaveBeenCalledWith(filter);
        expect(result).toEqual(mockProducts);
    });
});
