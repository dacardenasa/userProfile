import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import ContactMe from "./page";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe("ContactMe", () => {
  it("renders ContactMe page", () => {
    render(<ContactMe />);

    const contactMe = screen.getByText("Contact Me");

    expect(contactMe).toBeInTheDocument();
  });
});
