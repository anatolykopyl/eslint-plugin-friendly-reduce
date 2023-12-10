"use strict";

const isMethodCall = require('../utils/is-method-call.js');
const isNodeValueNotFunction = require('../utils/is-node-value-not-a-function.js');
const isReturnValue = require('../utils/is-return-value.js');
const isOnlyReturnInFunction = require('../utils/is-only-return-in-function.js');

const meta = {
  type: 'problem',
  docs: {
    description: "Disallow `Array#reduce()` outside of a function explaining it",
    recommended: true,
    url: null, // URL to the documentation page for this rule
  },
  fixable: null, // Or `code` or `whitespace`
  schema: [],
  messages: {
    "wrap-reduce": "{{method}} call should be wrapped in its own function."
  }
}

const create = (context) => {
  const cases = [
    {
      test: callExpression => {
        const isReduce = isMethodCall(callExpression, {
          methods: ['reduce', 'reduceRight'],
          minimumArguments: 1,
          maximumArguments: 2,
          optionalCall: false,
          optionalMember: false,
        })
        && !isNodeValueNotFunction(callExpression.arguments[0])

        return isReduce 
        && (!isReturnValue(callExpression) || !isOnlyReturnInFunction(callExpression.parent))
      },
      getMethodNode: callExpression => callExpression.callee.property,
    }
  ]

  return {
    CallExpression(callExpression) {
      for (const {test, getMethodNode} of cases) {
        if (test(callExpression)) {
          const methodNode = getMethodNode(callExpression);
          return context.report({
            node: methodNode,
            messageId: "wrap-reduce",
            data: {method: methodNode.name},
          })
        }
      }
    }
  }
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta,
  create
};
