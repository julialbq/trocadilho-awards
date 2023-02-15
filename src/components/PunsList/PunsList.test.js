import { render, screen } from "@testing-library/react";
import { PunsList } from "./PunsList";

const renderSetUp = () => {
  const puns = [
    {
      id: 1,
      author: "@jose",
      date: "01/04/2022",
      context: "conversation about puns",
      message: "pun intended",
      votes: 1,
    },
    {
      id: 2,
      author: "@maria",
      date: "22/10/2022",
      context: "conversation about puns",
      message: "pun unintended",
      votes: 5,
    },
  ];

  return render(<PunsList puns={puns} />);
};

describe("<PunsList />", () => {
  describe("it should render a table and its contents", () => {
    it("renders table title", () => {
      renderSetUp();

      const tableTitle = screen.getByRole("heading", { name: /list of puns/i });

      expect(tableTitle).toBeInTheDocument();
    });

    it("render stable header row", () => {
      renderSetUp();

      const headerColumnTitle = screen.getByRole("row", {
        name: /date votes author context pun vote for your favorite/i,
      });

      expect(headerColumnTitle).toBeInTheDocument();
    });

    it("renders table column header title", () => {
      renderSetUp();

      const headerColumnTitle = screen.getByRole("columnheader", {
        name: /author/i,
      });

      expect(headerColumnTitle).toBeInTheDocument();
    });

    it("renders vote button", () => {
      renderSetUp();

      const voteButtons = screen.getAllByRole("button", {
        name: /vote/i,
      });

      expect(voteButtons[0]).toBeInTheDocument();
    });
  });

  describe("it should render the list of puns when available", () => {
    it("should render in the table all puns available", () => {
      const puns = [
        {
          id: 1,
          author: "@jose",
          date: "01/04/2022",
          context: "conversation about puns",
          message: "pun intended",
          votes: 1,
        },
        {
          id: 2,
          author: "@maria",
          date: "22/10/2022",
          context: "conversation about puns",
          message: "pun unintended",
          votes: 5,
        },
      ];
      render(<PunsList puns={puns} />);

      const tableRows = screen.queryAllByRole("row");

      expect(tableRows).toHaveLength(puns.length + 1);
    });

    it("should render warning of empty list when puns are not available", () => {
      const emptyPuns = [];
      render(<PunsList puns={emptyPuns} />);

      const warningMessage = screen.getByText(/no puns available/i);

      expect(warningMessage).toBeInTheDocument();
    });
  });
});
