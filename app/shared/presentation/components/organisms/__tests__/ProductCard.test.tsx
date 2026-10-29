import { render, screen } from "@testing-library/react";
import ProductImage from "../ProductImage";

describe("ProductImage", () => {
	it("should render correctly", () => {
		const { container } = render(
			<ProductImage
				id=""
				tone=""
				tag=""
				type=""
				brand=""
				color=""
				name=""
				storage=""
				priceLabel=""
			/>
		);
		expect(container).toBeInTheDocument();
	});
});