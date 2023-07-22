import { rest } from "msw";
import { setupServer } from "msw/node";

const restHandlers = [
  rest.get("https://example.com", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "admin" }));
  }),
];

export const server = setupServer(...restHandlers);
