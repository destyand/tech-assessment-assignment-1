import { render, screen } from "@testing-library/react";
import { Button } from "../Button";

describe("Button", () => {
	it("should render children correctly", () => {
		render(<Button className="green">Test Content</Button>);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});