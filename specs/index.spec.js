const assert = require("assert");
const index = require("../index");

const notWeekend = new Date(Date.UTC(2022, 4, 5, 15, 0));
const weekend = new Date(Date.UTC(2022, 4, 1, 15, 0));
const outOfWorkingHours = new Date(Date.UTC(2022, 4, 8, 17, 1));
const inWorkingHours = new Date(Date.UTC(2022, 4, 8, 16, 59));

describe("Date is on weekend", () => {
  it("should return true", () => {
    const result = index.isWeekend(weekend);
    assert.strictEqual(result, true);
  });

  it("should return false", () => {
    const result = index.isWeekend(notWeekend);
    assert.strictEqual(result, false);
  });
});
