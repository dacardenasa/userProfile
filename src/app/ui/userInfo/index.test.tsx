import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { UserInfo } from "./index";

describe("UserInfo", () => {
  it("renders UserInfo component", () => {
    render(<UserInfo />);

    const username = screen.getByText("Diego Cardenas");

    expect(username).toBeInTheDocument();
  });
});
