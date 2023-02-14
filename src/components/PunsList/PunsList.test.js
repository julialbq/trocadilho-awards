import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PunsList } from "./PunsList";

describe("<PunsList />", () => {
  it("render table title", () => {
    render(<PunsList />);

    const tableTitle = screen.getByRole("heading", { name: /list of puns/i });

    expect(tableTitle).toBeInTheDocument();
  });

  it("render table header row", () => {
    render(<PunsList />);

    const headerColumnTitle = screen.getByRole("row", {
      name: /date votes author context pun vote for your favorite/i,
    });

    expect(headerColumnTitle).toBeInTheDocument();
  });

  it("render table column header title", () => {
    render(<PunsList />);

    const headerColumnTitle = screen.getByRole("columnheader", {
      name: /author/i,
    });

    expect(headerColumnTitle).toBeInTheDocument();
  });

  it("render vote button", () => {
    render(<PunsList />);

    const voteButtons = screen.getAllByRole("button", {
      name: /vote/i,
    });

    expect(voteButtons[0]).toBeInTheDocument();
  });

  it("calls onClick with correct result", () => {
    render(<PunsList />);

    const voteButtons = screen.getAllByRole("button", {
      name: /vote/i,
    });
    const votes = screen.getAllByTestId("vote-result");

    const voteButton = voteButtons[0];
    const vote = votes[0];

    userEvent.click(voteButton);

    expect(vote).toHaveTextContent("2");
  });
});
