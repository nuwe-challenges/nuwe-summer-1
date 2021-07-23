import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";

describe("<Component />", () => {
  const actions = { filterCharacters: jest.fn() };
  beforeEach(() => {
    render(<Component />);
  });
  test("it renders", () => {
    const text = screen.getByText("Text");
    expect(text).toBeInTheDocument();
  });
  test("button calls an action", () => {
    let btn = screen.getAllByRole("button")[0];
    fireEvent.click(btn);
    expect(actions.filterCharacters).toHaveBeenCalled();
  });
});
