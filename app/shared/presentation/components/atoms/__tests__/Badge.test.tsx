import { render, screen } from "@testing-library/react";
import Badge from "../Badge";

describe("Badge", () => {
	it("should render children correctly", () => {
		render(<Badge variant="green">Test Content</Badge>);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});