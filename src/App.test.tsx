import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders checkbox comida", () => {
  render(<App />);
  const checkboxComida = screen.getByText(/comida/i);
  expect(checkboxComida).toBeInTheDocument();
});
