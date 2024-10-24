const upperSnakeCaseKeysRule = require("./eslint-rules/upperSnakeCaseKeys");
const noHardcodedStrings = require("./eslint-rules/no-hardcoded-strings");
const plugin = {
  rules: {
    "upper-snake-case-keys": upperSnakeCaseKeysRule,
    "no-hardcoded-strings": noHardcodedStrings,
  },
};
module.exports = plugin;
