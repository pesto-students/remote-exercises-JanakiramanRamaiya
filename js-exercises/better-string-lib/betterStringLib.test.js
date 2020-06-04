import { equal, reverse, normalize } from "./betterStringLib";

describe("better string lib", () => {
  test("function should return true if both string are equal", () => {
    expect(equal("a", "a")).toBe(true);
  });
  test("function should not restrict itself with ASCII", () => {
    expect(equal("mañana", "mañana")).toBe(true);
  });
  test("function should reverse the given string ", () => {
    expect(reverse("ab")).toBe("ba");
  });
  test("function should reverse the given string properly even other than ASCII ", () => {
    expect(reverse("foo 𝌆 bar")).toBe(normalize("rab 𝌆 oof"));
  });
  test("function should reverse the given string properly even other than ASCII ", () => {
    expect(reverse("mañana mañana")).toBe(normalize("anañam anañam"));
  });
});
