import { render, screen } from "@testing-library/react";
import { App } from "app";
import { HashRouter } from "react-router-dom";

test("renders learn react link", () => {
  render(<App />, { wrapper: HashRouter });
  const loginElement = screen.getByText(/Login/i);
  expect(loginElement).toBeInTheDocument();
});
