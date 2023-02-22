import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

describe("<Header />", () => {
  describe("should render all buttons", () => {
    it("renders the List of Puns button", () => {
      render(<Header />);
      const listButton = screen.getByRole("button", { name: /list of puns/i });

      expect(listButton).toBeInTheDocument();
    });
    it("renders the Add Pun button", () => {
      render(<Header />);
      const addButton = screen.getByRole("button", { name: /add pun/i });

      expect(addButton).toBeInTheDocument();
    });
    it("renders the Ranking button", () => {
      render(<Header />);
      const rankingButton = screen.getByRole("button", { name: /ranking/i });

      expect(rankingButton).toBeInTheDocument();
    });
  });
  describe("when the List of Puns button is clicked", () => {
    it("calls the currentPage state", () => {
      const setCurrentPage = jest.fn();

      render(<Header setCurrentPage={setCurrentPage} />);

      const listButton = screen.getByRole("button", { name: /list of puns/i });

      userEvent.click(listButton);

      expect(setCurrentPage).toBeCalled();
    });
  });
  describe("when de Add Pun button is clicked", () => {
    it("calls the currentPage state", () => {
      const setCurrentPage = jest.fn();

      render(<Header setCurrentPage={setCurrentPage} />);

      const addButton = screen.getByRole("button", { name: /add pun/i });

      userEvent.click(addButton);

      expect(setCurrentPage).toBeCalled();
    });
  });
});
