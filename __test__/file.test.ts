import { findDependabotFilePath } from "../src/lib";
import fs, { Dirent } from "fs";
import { join } from "path";

describe("findDependabotFilePath", () => {
  let readdirSpy: jest.SpyInstance;

  beforeEach(() => {
    readdirSpy = jest.spyOn(fs, "readdir");
  });

  afterEach(() => {
    readdirSpy.mockRestore();
  });

  it("should return the path to the dependabot file if it exists", async () => {
    const dirPath = join(process.cwd(), ".github");
    const dependabotFilePath = join(dirPath, "dependabot.yml");

    readdirSpy.mockResolvedValueOnce([
      { name: "dependabot.yml", isFile: () => true } as Dirent,
    ]);

    const result = await findDependabotFilePath(dirPath);
    expect(result).toEqual(dependabotFilePath);
  });
});
