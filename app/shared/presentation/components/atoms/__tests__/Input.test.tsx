import { render, screen } from "@testing-library/react";
import { Input } from "../Input";

describe("Input", () => {
	it("should render children correctly", () => {
		render(<Input value="test content" className="green" />);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});