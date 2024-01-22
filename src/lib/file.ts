import { readdir } from "fs/promises";
import { join } from "path";

/**
 * Searches for the path of dependabot.yml or dependabot.yaml file in the .github directory.
 *
 * @param {string} dirPath - The path to the directory to start the search from.
 * @returns {Promise<string>} The path to the dependabot file.
 */
export const findDependabotFilePath = async (
  dirPath = join(process.cwd(), ".github"),
): Promise<string> => {
  try {
    const filesAndDirs = await readdir(dirPath, { withFileTypes: true });

    for (const dirent of filesAndDirs) {
      if (dirent.isFile() && isDependabotFile(dirent.name)) {
        return join(dirPath, dirent.name);
      }
    }

    throw new Error(
      "No dependabot.yml or dependabot.yaml file found in the .github directory.",
    );
  } catch (error: any) {
    throw new Error(
      `Error finding dependabot.yml or dependabot.yaml file in the .github directory: ${error.message}`,
    );
  }
};

/**
 * Checks if the given filename is a dependabot file.
 *
 * @param {string} filename - The name of the file to check.
 * @returns {boolean} Whether the filename is a dependabot file.
 */
const isDependabotFile = (filename: string): boolean => {
  return filename === "dependabot.yml" || filename === "dependabot.yaml";
};
