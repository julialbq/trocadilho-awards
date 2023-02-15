import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Puns } from "./Puns";

const renderSetUp = () => {
  const pun = {
    id: 1,
    author: "@jose",
    date: "01/04/2022",
    context: "conversation about puns",
    message: "pun intended",
    votes: 1,
  };

  return render(<Puns pun={pun} />);
};

describe("<Puns />", () => {
  describe("should render all pun information", () => {
    it("renders author of the pun", () => {
      renderSetUp();

      const punAuthor = screen.getByRole("cell", { name: "@jose" });

      expect(punAuthor).toBeInTheDocument();
    });

    it("renders date of the pun", () => {
      renderSetUp();

      const punDate = screen.getByRole("cell", { name: "01/04/2022" });

      expect(punDate).toBeInTheDocument();
    });

    it("renders the context of the pun", () => {
      renderSetUp();

      const punContext = screen.getByRole("cell", {
        name: "conversation about puns",
      });

      expect(punContext).toBeInTheDocument();
    });

    it("renders the pun", () => {
      renderSetUp();

      const punMessage = screen.getByRole("cell", { name: "pun intended" });

      expect(punMessage).toBeInTheDocument();
    });

    it("renders how many votes the pun has", () => {
      renderSetUp();

      const punVotes = screen.getByRole("cell", { name: 1 });

      expect(punVotes).toBeInTheDocument();
    });

    it("renders the vote button", () => {
      renderSetUp();

      const voteButton = screen.getByRole("button", { name: /vote/i });

      expect(voteButton).toBeInTheDocument();
    });

    it("should render the correct amount of votes when onClick is called", () => {
      renderSetUp();

      const voteButton = screen.getByRole("button", { name: /vote/i });
      const punVotes = screen.getByRole("cell", { name: 1 });

      userEvent.click(voteButton);

      expect(punVotes).toHaveTextContent("2");
    });
  });
});
