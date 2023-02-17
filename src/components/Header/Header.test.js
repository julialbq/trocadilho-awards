import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Header } from "./Header";

describe("<Header />", () => {
  describe("should render all buttons", () => {
    it("renders the List of Puns button", () => {
      render(<Header />)
      const listButton = screen.getByRole("button", { name: /list of puns/i });

      expect(listButton).toBeInTheDocument()
    })
    it("renders the Add Pun button", () => {
      render(<Header />)
      const addButton = screen.getByRole("button", { name: /add pun/i });

      expect(addButton).toBeInTheDocument()
    })
    it("renders the Ranking button", () => {
      render(<Header />)
      const rankingButton = screen.getByRole('button', {name: /ranking/i})

      expect(rankingButton).toBeInTheDocument()
    })
  })
  describe("when the List of Puns button is clicked", () => {
    it("changes states to render list of Puns", () => {
      const setListState = jest.fn();
      const setAddState = jest.fn();
      const setRankingState = jest.fn()

      render(<Header setListPage={setListState} setAddPage={setAddState} setRankingPage={setRankingState} />);

      const listButton = screen.getByRole("button", { name: /list of puns/i });

      userEvent.click(listButton);

      expect(setListState).toBeCalled();
      expect(setAddState).toBeCalled();
      expect(setRankingState).toBeCalled()
    });
  });
  describe("when de Add Pun button is clicked", () => {
    it('changes states to render form to add pun', () => {
      const setListState = jest.fn();
      const setAddState = jest.fn();
      const setRankingState = jest.fn()

      render(<Header setListPage={setListState} setAddPage={setAddState} setRankingPage={setRankingState} />);

      const addButton = screen.getByRole("button", { name: /add pun/i });

      userEvent.click(addButton);

      expect(setListState).toBeCalled();
      expect(setAddState).toBeCalled();
      expect(setRankingState).toBeCalled()
    })
  })
  describe("when de Ranking button is clicked", () => {
    it('changes states to ranking of puns and creative devs', () => {
      const setListState = jest.fn();
      const setAddState = jest.fn();
      const setRankingState = jest.fn()

      render(<Header setListPage={setListState} setAddPage={setAddState} setRankingPage={setRankingState} />);

      const rankingButton = screen.getByRole("button", { name: /ranking/i });

      userEvent.click(rankingButton);

      expect(setListState).toBeCalled();
      expect(setAddState).toBeCalled();
      expect(setRankingState).toBeCalled()
    })
  })
});
