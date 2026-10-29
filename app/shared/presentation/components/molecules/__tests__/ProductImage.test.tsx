import { render, screen } from "@testing-library/react";
import ProductImage from "../ProductImage";

describe("ProductImage", () => {
	it("should render correctly", () => {
		const { container } = render(
			<ProductImage
				tone=""
				tag=""
				type=""
				brand=""
				color=""
			/>
		);
		expect(container).toBeInTheDocument();
	});
});