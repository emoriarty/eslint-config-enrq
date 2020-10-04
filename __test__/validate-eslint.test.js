const fs = require("fs");
const path = require("path");
const eslint = require("eslint");
const glob = require("glob");

function getErrors(configFile, fileToTest) {
  const CLIEngine = eslint.CLIEngine;

  const cli = new CLIEngine({
    configFile: configFile,
  });

  return cli.executeOnText(fs.readFileSync(fileToTest, "utf8"));
}

describe("Validate ESLint configs", () => {
  const configs = path.join(process.cwd(), "*.js");
  glob.sync(configs).forEach((file) => {
    it(`load config ${file} in ESLint to validate all rules are correct`, () => {
      expect(getErrors(file, "index.js").results[0].messages).toEqual([]);
    });
  });
});
