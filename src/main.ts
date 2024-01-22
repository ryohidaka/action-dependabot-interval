import {
  findDependabotFilePath,
  getInputParameter,
  modifyDependabot,
} from "./lib";

async function run() {
  // Get input parameter.
  const { interval, message } = getInputParameter();

  // Find dependabot.yaml path
  const path = await findDependabotFilePath();

  // Modify dependabot.yaml intervel value
  modifyDependabot(path, interval);
}

void run();
