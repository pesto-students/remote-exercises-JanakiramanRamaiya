import { allSettled } from "./allSettled";
describe("allSettled", () => {
  it("The allSettled method returns a promise that resolves after all of the given promises have either fulfilled or rejected", () => {
    const promise1 = Promise.resolve(33);
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(66), 0));
    const promise3 = 99;
    const promise4 = Promise.reject(new Error("an error"));
    const results = [
      { status: "fulfilled", value: 33 },
      { status: "fulfilled", value: 66 },
      { status: "fulfilled", value: 99 },
      { status: "rejected", reason: new Error("an error") },
    ];
    const promises = [promise1, promise2, promise3, promise4];
    allSettled(promises).then((presults) => {
      expect(presults).toEqual(results);
    });
  });
  it("The allSettled method returns a promise that resolves after all of the given promises have either fulfilled or rejected", () => {
    const promise1 = Promise.resolve(3);
    const promise2 = new Promise((resolve, reject) =>
      setTimeout(reject, 100, "foo")
    );

    const results = ["fulfilled", "rejected"];
    const promises = [promise1, promise2];
    allSettled(promises).then((pResults) => {
      expect(pResults.status).toEqual(results);
    });
  });
});
