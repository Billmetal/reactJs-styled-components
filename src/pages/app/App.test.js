import { render, screen, fireEvent } from "@testing-library/react";
import { App } from "./App";
import { rest } from "msw";
import { setupServer } from "msw/node";

const response = { speaker: "Speaker", quote: "Test quote" };

const server = setupServer(
    rest.get(process.env.REACT_APP_API, (req, res, ctx) => { 
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders the app with a button, quote and a image", () => { 
    render(<App />);
    
    const buttonEl = screen.getByRole('button');
    const imageEl = screen.getByRole("img");
    const textEl = screen.getByText(/Speaker/);

    expect(buttonEl).toBeInTheDocument();
    expect(imageEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();
});

test("calls api on button click and update text", async () => { 
    render(<App />);    
    const buttonEl = screen.getByRole('button');
    fireEvent.click(buttonEl);
    const quoteEl = await screen.findByText(response.quote);
    expect(quoteEl).toBeInTheDocument();
});