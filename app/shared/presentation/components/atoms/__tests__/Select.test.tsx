import { render, screen } from "@testing-library/react";
import { Select } from "../Select";

describe("Select", () => {
	it("should render correctly", () => {
		const { container } = render(<Select options={[]} />);
		expect(container).toBeInTheDocument();
	});
});