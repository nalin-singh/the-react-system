import { expect, test } from "vitest";
import { add } from "./add";

test("Adds 1 + 2 to be equal to 3", () => {
  expect(add(1, 2)).toBe(3);
});
