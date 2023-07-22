import { rest } from "msw";

export const handlers = [
  rest.get("https://example.com", async (_req, res, ctx) => {
    await wait(1000);
    return res(ctx.json({ username: "admin" }));
  }),
];

const wait = async (ms: number) => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      resolve(); // setTimeoutの第一引数の関数として簡略化できる
    }, ms);
  });
};
