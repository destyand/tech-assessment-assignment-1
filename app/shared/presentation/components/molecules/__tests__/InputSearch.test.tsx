import { render, screen } from "@testing-library/react";
import InputSearch from "../InputSearch";

describe("InputSearch", () => {
	it("should render correctly", () => {
		const { container } = render(<InputSearch value="" className="" />);
		expect(container).toBeInTheDocument();
	});

	it("should render children correctly", () => {
		render(<InputSearch value="Test Content" />);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});