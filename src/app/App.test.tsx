import { render, screen } from "@testing-library/react";
import { App } from "app";
import { BrowserRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<App />, { wrapper: BrowserRouter });
  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});
