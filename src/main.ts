import { findDependabotFilePath, getInputParameter } from "./lib";

async function run() {
  // Get input parameter.
  const { interval, message } = getInputParameter();

  // Find dependabot.yaml path
  const path = await findDependabotFilePath();
}

void run();
