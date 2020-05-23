// write your own test cases
import flipArgs from "./flipArgs";

describe("flipArgs", () => {
  it("reversed arguments should return", () => {
    let utilityFunction = (a, b, c, d) => `${a} ${b} ${c} ${d}`;
    let flipped = flipArgs(utilityFunction);

    const result = flipped("a", "b", "c", "d");

    expect(result).toEqual("d c b a");
  });
});
