const assert = require("assert");
const { describe, it } = require("mocha");
const index = require("../index");

const notWeekend = new Date(Date.UTC(2022, 4, 5, 15, 0));
const weekend = new Date(Date.UTC(2022, 4, 1, 15, 0));
const outOfWorkingHours = new Date(Date.UTC(2022, 5, 2, 8, 59));
const inWorkingHours = new Date(Date.UTC(2022, 5, 2, 15, 10));

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

describe("Date is out of working hours", () => {
  it("should return true", () => {
    const result = index.isOutOfWorkingHours(outOfWorkingHours);
    assert.strictEqual(result, true);
  });

  it("should return false", () => {
    const result = index.isOutOfWorkingHours(inWorkingHours);
    assert.strictEqual(result, false);
  });
});

describe("Calculated due dates", () => {
  it("should return It's weekend", () => {
    const result = index.calculateDueDate(weekend);
    assert.strictEqual(result, "It's weekend");
  });

  it("should return Out of working hours", () => {
    const result = index.calculateDueDate(outOfWorkingHours);
    assert.strictEqual(result, "Out of working hours");
  });

  it("should return 2022.06.06:9:10", () => {
    const result = index.calculateDueDate(inWorkingHours, 10);
    assert.deepStrictEqual(result, new Date(Date.UTC(2022, 5, 6, 9, 10)));
  });
});
