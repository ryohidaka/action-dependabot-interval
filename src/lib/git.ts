import { exec } from "child_process";
import { GIT_USER_EMAIL, GIT_USER_NAME } from "../constants";

/**
 * This function stages all changes and commits them with a given message.
 * @param {string} message - The commit message.
 * @throws {Error} Will throw an error if the exec function encounters an error.
 */
export const commitFile = (message: string) => {
  // Check for changes
  exec("git diff --exit-code", (error, _stdout, _stderr) => {
    if (!error) {
      console.log("No changes to commit");
      return;
    }

    // Set the local git user email
    exec(
      `git config --local user.email "${GIT_USER_EMAIL}"`,
      (error, _stdout, _stderr) => {
        if (error) {
          throw new Error(`exec error: ${error}`);
        }
      },
    );

    // Set the local git username
    exec(
      `git config --local user.name "${GIT_USER_NAME}"`,
      (error, _stdout, _stderr) => {
        if (error) {
          throw new Error(`exec error: ${error}`);
        }
      },
    );

    // Stage all changes
    exec("git add .", (error, _stdout, _stderr) => {
      if (error) {
        throw new Error(`exec error: ${error}`);
      }

      // Commit the staged changes with the provided message
      exec(`git commit -m "${message}"`, (error, _stdout, _stderr) => {
        if (error) {
          throw new Error(`exec error: ${error}`);
        }
        console.log("Commit successful");

        // Push commit
        exec(`git push`, (error, _stdout, _stderr) => {
          if (error) {
            throw new Error(`exec error: ${error}`);
          }
          console.log("Push successful");
        });
      });
    });
  });
};
