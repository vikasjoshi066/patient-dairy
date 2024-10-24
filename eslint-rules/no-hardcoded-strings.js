module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow hardcoded strings - use Strings constant instead",
      category: "Best Practices",
      recommended: true,
    },
    fixable: null,
    schema: [], // no options
  },
  create(context) {
    return {
      Literal(node) {
        // Skip if it's not a string
        if (typeof node.value !== "string") {
          return;
        }

        // Skip if string is empty or single character
        if (node.value.length <= 1) {
          return;
        }

        // Skip if string is a URL or file path
        if (node.value.startsWith("http") || node.value.includes("/")) {
          return;
        }

        // Skip if parent is import/require
        if (
          node.parent.type === "ImportDeclaration" ||
          (node.parent.type === "CallExpression" &&
            node.parent.callee.name === "require")
        ) {
          return;
        }

        // Skip if it's in the strings constants file
        if (context.getFilename().includes("strings.js")) {
          return;
        }

        // Report error if string is hardcoded
        context.report({
          node,
          message:
            'String literals should be defined in strings.js constants file: "{{string}}"',
          data: {
            string: node.value,
          },
        });
      },
    };
  },
};
