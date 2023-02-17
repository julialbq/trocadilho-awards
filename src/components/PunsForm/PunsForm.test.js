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
  describe("should submit form when all fields are filled", () => {
    it("calls the handleDate function", () => {
      const handleDate = jest.fn();

      render(<PunsForm handleDate={handleDate} />);

      const dateInput = screen.getByLabelText(/date:/i);

      userEvent.change(dateInput, { target: { value: "01/01/2020" } });

      expect(handleDate).toBeCalled();
    });
    it("calls the handleDev function", () => {
      const handleDev = jest.fn();

      render(<PunsForm handleDev={handleDev} />);

      const devInput = screen.getByLabelText(/dev:/i);

      userEvent.type(devInput, "01/01/2020");

      expect(handleDev).toBeCalled();
    });
    it("calls the handleContext function", () => {
      const handleContext = jest.fn();

      render(<PunsForm handleContext={handleContext} />);

      const contextInput = screen.getByLabelText(/context:/i);

      userEvent.type(contextInput, "context");

      expect(handleContext).toBeCalled();
    });
    it("calls the handleMessage function", () => {
      const handleMessage = jest.fn();

      render(<PunsForm handleMessage={handleMessage} />);

      const messageInput = screen.getByLabelText(/pun:/i);

      userEvent.type(messageInput, "pun pun");

      expect(handleMessage).toBeCalled();
    });
    it("calls the handleSubmit function once", () => {
      const handleSubmit = jest.fn();

      render(<PunsForm handleSubmit={handleSubmit} />);

      const addButton = screen.getByRole("button", { name: /add pun/i });

      userEvent.click(addButton);

      expect(handleSubmit).toHaveBeenCalledTimes(1);
    });

    it("calls handleSubmit once with the correct input values", () => {
      const date = "01/01/2001";
      const dev = "julia.al";
      const context = "punspuns";
      const pun = "my pun";
      const handleSubmit = jest.fn();

      render(<PunsForm handleSubmit={handleSubmit} />);

      const dateInput = screen.getByLabelText(/date:/i);
      const devInput = screen.getByLabelText(/dev:/i);
      const contextInput = screen.getByLabelText(/context:/i);
      const punInput = screen.getByLabelText(/pun:/i);
      const addButton = screen.getByRole("button", { name: /add pun/i });

      userEvent.type(dateInput, date);
      userEvent.type(devInput, dev);
      userEvent.type(contextInput, context);
      userEvent.type(punInput, pun);

      userEvent.click(addButton);

      expect(handleSubmit).toHaveBeenCalledWith({ });
    });
  });
});
