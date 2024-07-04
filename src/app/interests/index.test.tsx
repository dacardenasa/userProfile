import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Interests from "./page";

describe("Interests", () => {
  it("renders Interests page", () => {
    render(<Interests />);

    const myInterests = screen.getByText("My Interests");

    expect(myInterests).toBeInTheDocument();
  });
});
