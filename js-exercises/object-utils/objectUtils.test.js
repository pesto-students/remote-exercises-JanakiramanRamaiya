import { map, filter, invert, merge, all, some } from "./objectUtils";

describe("objectUtils", () => {
  it("map takes an object and transforms the (key, value) pair according to the callback function.", () => {
    const obj = { jaan: 20, sush: 40 };
    const callback = ([key, val]) => [key.toUpperCase(), val * 10];
    const result = { JAAN: 200, SUSH: 400 };
    expect(map(obj, callback)).toEqual(result);
  });
  it("Filters on the basis of keys or values.", () => {
    const obj = { id: 11, name: "jaan" };
    const callback = ([key, val]) => key === "name";
    const result = { name: "jaan" };
    expect(filter(obj, callback)).toEqual(result);
  });
  it("Inverts key value pairs.", () => {
    const obj = { jaan: "name", stpauls: "school" };

    const result = { name: "jaan", school: "stpauls" };
    expect(invert(obj)).toEqual(result);
  });
  it("Merge n number of objects into a single object.", () => {
    const obj1 = { name: "jaan" };
    const obj2 = { school: "stpauls" };
    const obj3 = { age: 24 };

    const result = { name: "jaan", school: "stpauls", age: 24 };
    expect(merge(obj1, obj2, obj3)).toEqual(result);
  });
  it("all elements in the array should pass the test implemented", () => {
    const array1 = [1, 30, 39, 29, 10, 13];
    const callback = (currentValue) => currentValue < 40;
    const result = true;
    expect(all(array1, callback)).toEqual(result);
  });
  it("atleast one elements in the array should pass the test implemented", () => {
    const array1 = [1, 30, 45, 29, 10, 13];
    const callback = (currentValue) => currentValue > 40;
    const result = true;
    expect(some(array1, callback)).toEqual(result);
  });
});
