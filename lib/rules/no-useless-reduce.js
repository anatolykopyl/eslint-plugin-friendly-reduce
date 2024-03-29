const isMethodCall = require('../utils/is-method-call')
const isNodeValueNotFunction = require('../utils/is-node-value-not-a-function')
const getReturnsFromFunction = require('../utils/get-returns-from-function')

const meta = {
  type: 'suggestion',
  docs: {
    description: 'Disallow the usage of useless `Array#reduce()`',
    recommended: true,
    url: null,
  },
  fixable: null,
  schema: [],
  messages: {
    'no-useless-reduce': 'If the {{method}} callback returns the same value it receives as the accumulator, then the reduce should be replaced with a for loop.',
  },
}

function create(context) {
  const cases = [
    {
      test: (callExpression) => {
        const isReduce = isMethodCall(callExpression, {
          methods: ['reduce', 'reduceRight'],
          minimumArguments: 1,
          maximumArguments: 2,
          optionalCall: false,
          optionalMember: false,
        })
        && !isNodeValueNotFunction(callExpression.arguments[0])

        const reducer = callExpression.arguments[0]
        const accumulator = reducer.params[0]
        const allReturnsAreAcc = getReturnsFromFunction(reducer, context)
          .every(reducerReturn =>
            accumulator.type === reducerReturn.type
            && accumulator.name === reducerReturn.name)

        return isReduce && allReturnsAreAcc
      },
      getMethodNode: callExpression => callExpression.callee.property,
    },
  ]

  return {
    CallExpression(callExpression) {
      for (const { test, getMethodNode } of cases) {
        if (test(callExpression)) {
          const methodNode = getMethodNode(callExpression)
          return context.report({
            node: methodNode,
            messageId: 'no-useless-reduce',
            data: { method: methodNode.name },
          })
        }
      }
    },
  }
}

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta,
  create,
}
