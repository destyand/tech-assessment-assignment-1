import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { ApiCatalogRepository } from "../infrastructure/api/catalog.repository";

describe("ApiCatalogRepository", () => {
    const originalEnv = process.env.NEXT_PUBLIC_BASE_API_URL;

    beforeEach(() => {
        process.env.NEXT_PUBLIC_BASE_API_URL = "http://localhost:3000/api";
    });

    afterEach(() => {
        process.env.NEXT_PUBLIC_BASE_API_URL = originalEnv;
        vi.restoreAllMocks();
    });

    it("should fetch products with filter query params and return mapped domain entities", async () => {
        const mockApiResponse = {
            status: 200,
            message: "success",
            data: [
                {
                    id: "101",
                    name: "Tablet Ultra",
                    brand: "BrandX",
                    type: "Tablets",
                    price: 8000000,
                    color: "Silver",
                    tone: "light",
                    tag: "POPULAR",
                    storage: "128GB",
                    screen: "11 inch",
                    chip: "M2",
                    camera: "12MP",
                    battery: "8000mAh",
                    os: "iPadOS",
                    image: "https://example.com/tablet.jpg",
                },
            ],
        };

        vi.stubGlobal(
            "fetch",
            vi.fn().mockResolvedValue({
                json: async () => mockApiResponse,
            })
        );

        const repo = new ApiCatalogRepository();
        const filter = { search: "ultra", type: "Tablets", sort: "low" };
        const result = await repo.getAllProducts(filter);

        expect(fetch).toHaveBeenCalledWith(
            "http://localhost:3000/api/products?search=ultra&type=Tablets&sort=low"
        );
        expect(result).toHaveLength(1);
        expect(result[0].id).toBe("101");
        expect(result[0].name).toBe("Tablet Ultra");
        expect(result[0].storage).toEqual({ capacity: 128, unit: "GB" });
        expect(result[0].price).toEqual({
            amount: 8000000,
            currency: { code: "IDR", symbol: "Rp" },
        });
    });
});
