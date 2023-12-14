'use strict'

const outdent = require('outdent')

const RuleTester = require('eslint').RuleTester
const rule = require('../../../lib/rules/no-useless-reduce')

const config = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
  },
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
  },
}

const ruleTester = new RuleTester(config)
ruleTester.run('no-useless-reduce', rule, {
  valid: [
    outdent`
      nums.reduce((acc, curr) => {
        return acc + curr
      })`,
    'nums.reduce((acc, curr) => acc + curr)',
    outdent`
      nums.reduce((acc, curr) => {
        const sum = acc + curr
        return sum
      })`,
  ],

  invalid: [
    {
      code: outdent`
        nums.reduce((acc, curr) => {
          return acc
        })`,
      errors: [{ message: 'If the reduce callback returns the same value it receives as the accumulator, then the reduce should be replaced with a for loop.' }],
    },
  ],
})
