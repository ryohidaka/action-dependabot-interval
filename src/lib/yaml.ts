import fs from "fs";
import yaml from "js-yaml";
import { DependabotConfig, Interval } from "../types";

/**
 * Modifies the Dependabot configuration file at the specified file path.
 * @param {string} filePath - The path to the Dependabot configuration file.
 * @param {Interval} interval - The new interval to be set in the configuration.
 */
export const modifyDependabot = (
  filePath: string,
  interval: Interval,
): void => {
  // Load the Dependabot configuration file.
  const fileContent = fs.readFileSync(filePath, "utf8");
  const file = yaml.load(fileContent) as DependabotConfig;

  // Modify the update interval.
  file.updates[0].schedule.interval = interval;

  // Write the modified configuration back to the file.
  const updatedFileContent = fileContent.replace(
    /interval: .*/,
    `interval: "${interval}"`,
  );
  fs.writeFileSync(filePath, updatedFileContent);
};
