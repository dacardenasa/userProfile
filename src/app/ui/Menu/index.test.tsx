import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Menu } from "./index";

describe("Menu", () => {
  it("renders Menu component", () => {
    render(<Menu />);

    const menuOption = screen.getByText("About me");

    expect(menuOption).toBeInTheDocument();
  });
});
