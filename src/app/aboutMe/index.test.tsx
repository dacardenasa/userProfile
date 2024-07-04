import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import AboutMe from "./page";

describe("AboutMe", () => {
  it("renders AboutMe page", () => {
    render(<AboutMe />);

    const aboutMe = screen.getByText("About Me");

    expect(aboutMe).toBeInTheDocument();
  });
});
