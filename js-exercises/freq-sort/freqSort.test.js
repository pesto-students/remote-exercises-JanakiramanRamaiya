import { freqSort } from "./freqSort";
const normalize = (array) => array.map((ele) => ele.normalize());
describe("frequency Sort", () => {
  test("Sort an array by frequency", () => {
    expect(freqSort(["a", "z", "z", "z", "b", "b", "z"])).toEqual([
      "z",
      "b",
      "a",
    ]);
  });
  test("Sort an array by frequency even for non-ASCII ", () => {
    expect(freqSort(["a", "ñ", "ñ", "ñ", "b", "b", "ñ"])).toEqual(
      normalize(["ñ", "b", "a"])
    );
  });
});
