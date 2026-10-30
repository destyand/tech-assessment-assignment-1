import { describe, it, expect } from "vitest";
import { catalogDetailMapper } from "../infrastructure/catalog-detail.mapper";
import { ProductDetailDto } from "../infrastructure/catalog-detail.dto";

describe("catalogDetailMapper", () => {
	it("should correctly map ProductDetailDto to UserType domain entity", () => {
		const dto: ProductDetailDto = {
			id: "3",
			name: "iPad Air",
			brand: "Apple",
			type: "Tablets",
			price: 599,
			color: "Sky Blue",
			tone: "blue",
			tag: "",
			storage: "128 GB",
			screen: "11-inch",
			chip: "Apple M3",
			camera: "12 MP",
			battery: "Up to 10 hours",
			os: "iPadOS 18",
			image: ''
		};

		const result = catalogDetailMapper.toDomain(dto);

		expect(result).toEqual({
			id: "3",
			name: "iPad Air",
			brand: "Apple",
			type: "Tablets",
			price: 599,
			color: "Sky Blue",
			tone: "blue",
			tag: "",
			storage: "128 GB",
			screen: "11-inch",
			chip: "Apple M3",
			camera: "12 MP",
			battery: "Up to 10 hours",
			os: "iPadOS 18",
			image: ''
		});
	});
});
