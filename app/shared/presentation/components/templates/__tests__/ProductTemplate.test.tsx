import { render, screen } from "@testing-library/react";
import ProductTemplate from "../ProductTemplate";

describe("ProductTemplate", () => {
	it("should render correctly", () => {
		const { container } = render(
			<ProductTemplate
				error={''}
				loading={false}
				data={
					[
						{
							id: "",
							name: "",
							brand: "",
							type: "",
							price: 0,
							color: "",
							tone: "",
							tag: "",
							storage: "",
							screen: "",
							chip: "",
							camera: "",
							battery: "",
							os: "",
						}
					]}
			/>
		);
		expect(container).toBeInTheDocument();
	});
});