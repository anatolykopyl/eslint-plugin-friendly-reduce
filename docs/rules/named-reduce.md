# Disallow `Array#reduce()` outside of a function explaining it (`named-reduce/named-reduce`)

<!-- end auto-generated rule header -->

Please describe the origin of the rule here.

## Rule Details

This rule aims to...

Examples of **incorrect** code for this rule:

```js

const sum = array.reduce((acc, curr) => acc + curr)

```

Examples of **correct** code for this rule:

```js

function getSum(array) {
  return array.reduce((acc, curr) => acc + curr)
}

```

## When Not To Use It

Give a short description of when it would be appropriate to turn off this rule.

## Further Reading

If there are other links that describe the issue this rule addresses, please include them here in a bulleted list.
