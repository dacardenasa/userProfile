import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { ContactForm } from "./index";

jest.mock("next/navigation", () => ({
  useRouter() {
    return {
      prefetch: () => null
    };
  }
}));

describe("ContactForm", () => {
  it("renders ContactForm component", () => {
    render(<ContactForm />);

    const contactme = screen.getByText("Contact Me");

    expect(contactme).toBeInTheDocument();
  });
});
