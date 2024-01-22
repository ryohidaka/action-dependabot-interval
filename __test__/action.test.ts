import * as core from "@actions/core";
import { getInputParameter } from "../src/lib";
import { Interval } from "../src/types";

describe("getInputParameter", () => {
  it("should return the correct interval and message", () => {
    jest.spyOn(core, "getInput").mockImplementation((name) => {
      if (name === "interval") {
        return "Weekly";
      }
      if (name === "message") {
        return "";
      }
      return "";
    });

    const expected = {
      interval: Interval.Weekly,
      message: "",
    };

    expect(getInputParameter()).toEqual(expected);
  });

  it("should return default values when an error occurs", () => {
    jest.spyOn(core, "getInput").mockImplementation(() => {
      throw new Error("Test error");
    });

    const expected = {
      interval: Interval.Weekly,
      message: "",
    };

    expect(getInputParameter()).toEqual(expected);
  });
});
