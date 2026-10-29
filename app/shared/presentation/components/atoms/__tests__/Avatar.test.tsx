import { render, screen } from "@testing-library/react";
import { Avatar } from "../Avatar";

describe("Avatar", () => {
	it("should render children correctly", () => {
		render(<Avatar>Test Content</Avatar>);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});