import { render, screen } from "@testing-library/react";
import Text from "../Text";

describe("Text", () => {
	it("should render correctly", () => {
		const { container } = render(<Text className="">Text Content</Text>);
		expect(container).toBeInTheDocument();
	});

	it("should render children correctly", () => {
		render(<Text>Test Content</Text>);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});