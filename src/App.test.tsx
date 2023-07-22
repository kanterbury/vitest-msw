import { render, screen } from "@testing-library/react";
import { describe, test, expect, beforeAll, afterEach, afterAll } from "vitest";
import App from "./App";
import { server } from "./mocks/server";
import { rest } from "msw";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("App", () => {
  test("error", async () => {
    server.use(
      rest.get("https://example.com", (_req, res, ctx) => {
        return res.once(
          ctx.status(500),
          ctx.json({ message: "Internal Server Error" })
        );
      })
    );
    const { findByText } = render(<App />);
    screen.debug();
    expect(await findByText("Error")).toBeInTheDocument();
  });

  test("renders App component", async () => {
    const { findByText } = render(<App />);
    // expect(await findByText("Loading..."));
    screen.debug();
    expect(await findByText("admin")).toBeInTheDocument();
  });
});
