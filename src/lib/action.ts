import * as core from "@actions/core";
import { InputParameter, Interval } from "../types";
import { DEFAULT_COMMIT_MESSAGE } from "../constants";

/**
 * Retrieves the interval and message parameters for the action.
 *
 * @returns {InputParameter} An object containing interval and message obtained from action inputs.
 */
export const getInputParameter = (): InputParameter => {
  try {
    const intervalString = core.getInput("interval", { required: true });
    const interval = getInterval(intervalString);
    const message = core.getInput("message") || DEFAULT_COMMIT_MESSAGE;

    return {
      interval,
      message,
    };
  } catch (error: any) {
    // Handle error and return default values
    core.setFailed(error.message);
    return {
      interval: Interval.Weekly,
      message: "",
    };
  }
};

/**
 * This function takes a string and returns the corresponding Enum.
 * If the string does not match any Enum, it throws an error.
 *
 * @param {string} intervalString - The string to be converted to an Interval Enum.
 * @returns {Interval} The Interval Enum that corresponds to the input string.
 * @throws Will throw an error if the input string does not match any Interval Enum.
 */
function getInterval(intervalString: string): Interval {
  switch (intervalString) {
    case Interval.Monthly:
      return Interval.Monthly;
    case Interval.Weekly:
      return Interval.Weekly;
    case Interval.Daily:
      return Interval.Daily;
    default:
      throw new Error(`Invalid interval: ${intervalString}`);
  }
}
