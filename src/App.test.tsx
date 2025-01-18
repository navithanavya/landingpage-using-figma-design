import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";


test("renders the app header", () => {
  render(<App />);
  const headerElement = screen.getByText(/Hello, World!/i);
  expect(headerElement).toBeInTheDocument();
});
