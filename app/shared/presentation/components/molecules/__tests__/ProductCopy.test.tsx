import { render, screen } from "@testing-library/react";
import ProductCopy from "../ProductCopy";

describe("ProductCopy", () => {
	it("should render correctly", () => {
		const { container } = render(
			<ProductCopy
				brand=""
				type=""
				name=""
				storage=""
				color=""
				priceLabel=""
			/>
		);
		expect(container).toBeInTheDocument();
	});
});