import { render, screen } from "@testing-library/react";
import IconSearch from "../IconSearch";

describe("IconSearch", () => {
	it("should render children correctly", () => {
		render(<IconSearch className="green">Test Content</IconSearch>);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});