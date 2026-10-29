import { render, screen } from "@testing-library/react";
import { Image } from "../Image";

describe("Image", () => {
	it("should render children correctly", () => {
		render(<Image src="" className="green">Test Content</Image>);
		expect(screen.getByText("Test Content")).toBeInTheDocument();
	});
});