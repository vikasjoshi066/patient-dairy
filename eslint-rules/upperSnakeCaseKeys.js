module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "enforce keys to be in upper snake case",
      category: "Stylistic Issues",
      recommended: false,
    },
    schema: [], // no options
  },
  create(context) {
    return {
      Property(node) {
        // Check if the property is a literal string
        if (
          node.key &&
          node.key.type === "Literal" &&
          typeof node.key.value === "string"
        ) {
          const key = node.key.value;
          const upperSnakeCasePattern = /^[A-Z_]+$/; // Upper snake case regex

          if (!upperSnakeCasePattern.test(key)) {
            context.report({
              node,
              message: `'${key}' should be in upper snake case`,
            });
          }
        }
      },
    };
  },
};
