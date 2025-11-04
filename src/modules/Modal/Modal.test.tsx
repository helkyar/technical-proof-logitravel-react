import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../../App";

describe("Modal component", () => {
  test("modal opens and closes", async () => {
    render(<App />);
    const title = () => screen.queryAllByText(/add item to list/i)[0];

    const addBtn = screen.getByText(/add/i);
    await userEvent.click(addBtn);
    expect(title()).toBeInTheDocument();

    const cancelBtn = screen.getByText(/cancel/i);
    await userEvent.click(cancelBtn);
    expect(title()).toBeFalsy();
  });

  test("form submission works", async () => {
    render(<App />);
    const title = () => screen.queryAllByText(/add item to list/i)[0];

    const addBtn = screen.getByText(/add/i);
    await userEvent.click(addBtn);
    expect(title()).toBeInTheDocument();

    const input = screen.getByPlaceholderText("Type the text here...");
    await userEvent.type(input, "New Item");

     const specificForm = document.getElementById(
      "addItemForm"
    ) as HTMLFormElement;
    const submitBtn = within(specificForm).getByRole("button", {
      name: /add/i,
    });
    await userEvent.click(submitBtn);

    const cancelBtn = screen.getByText(/cancel/i);
    await userEvent.click(cancelBtn);
    expect(screen.getByText(/new item/i)).toBeInTheDocument();
  });
});
