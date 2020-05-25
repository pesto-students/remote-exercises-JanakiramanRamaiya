import { longestWordInString } from "./longestWordInString";

describe("longestWordInString", () => {
  // write your own test cases
  it("should return a string", () => {
    expect(typeof longestWordInString()).toBe("string");
  });
  it("should return longest word", () => {
    expect(
      longestWordInString("practice is the proven may to improve codding")
    ).toBe("practice");
  });
  it("should return only longest word and not numbers or symbols", () => {
    expect(
      longestWordInString(
        "i wish to have my bank balance of 3000000000 dollars"
      )
    ).toBe("balance");
  });
  it("should return 1st longest word", () => {
    expect(longestWordInString("balance dollars")).toBe("balance");
  });
});
