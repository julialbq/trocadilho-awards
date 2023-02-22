import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PunsForm } from "./PunsForm";

describe("<PunsForm />", () => {
  describe("should render all elements", () => {
    it("renders title", () => {
      render(<PunsForm />);

      const title = screen.getByRole("heading", { name: /add new pun/i });
      expect(title).toBeInTheDocument();
    });

    it("renders date input", () => {
      render(<PunsForm />);

      const dateInput = screen.getByLabelText(/date:/i);

      expect(dateInput).toBeInTheDocument();
    });

    it("renders dev input", () => {
      render(<PunsForm />);

      const devInput = screen.getByLabelText(/dev:/i);

      expect(devInput).toBeInTheDocument();
    });

    it("renders context input", () => {
      render(<PunsForm />);

      const contextInput = screen.getByLabelText(/context:/i);

      expect(contextInput).toBeInTheDocument();
    });

    it("renders pun input", () => {
      render(<PunsForm />);

      const punInput = screen.getByLabelText(/pun:/i);

      expect(punInput).toBeInTheDocument();
    });

    it("renders button", () => {
      render(<PunsForm />);

      const addButton = screen.getByRole("button", { name: /add pun/i });

      expect(addButton).toBeInTheDocument();
    });
  });
  describe.skip("should submit form when all fields are filled", () => {
    it("calls the handleDate function", () => {
      const handleDate = jest.fn();

      render(<PunsForm handleDate={handleDate} />);

      const dateInput = screen.getByLabelText(/date:/i);

      userEvent.type(dateInput, "02020-01-01");

      expect(handleDate).toHaveBeenCalled();
    });
    it("calls the handleDev function", () => {
      const handleDev = jest.fn();

      render(<PunsForm handleDev={handleDev} />);

      const devInput = screen.getByLabelText(/dev:/i);

      userEvent.type(devInput, "01/01/2020");

      expect(handleDev).toHaveBeenCalled();
    });
    it("calls the handleContext function", () => {
      const handleContext = jest.fn();

      render(<PunsForm handleContext={handleContext} />);

      const contextInput = screen.getByLabelText(/context:/i);

      userEvent.type(contextInput, "context");

      expect(handleContext).toHaveBeenCalled();
    });
    it("calls the handleMessage function", () => {
      const handleMessage = jest.fn();

      render(<PunsForm handleMessage={handleMessage} />);

      const messageInput = screen.getByLabelText(/pun:/i);

      userEvent.type(messageInput, "pun pun");

      expect(handleMessage).toHaveBeenCalled();
    });

    it("clears the input fields after sending the form values", () => {
      const resetValues = jest.fn();

      render(<PunsForm />);

      const addButton = screen.getByRole("button", { name: /add pun/i });

      userEvent.click(addButton);

      expect(resetValues).toHaveBeenCalled();
    });
  });
});
