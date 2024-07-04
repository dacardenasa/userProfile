import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
  it("renders Header component", () => {
    render(<Header />);

    const username = screen.getByText("Diego Cardenas");

    expect(username).toBeInTheDocument();
  });
});
