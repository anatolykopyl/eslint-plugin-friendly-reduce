# Disallow `Array#reduce()` outside of a function explaining it (`friendly-reduce/wrap-reduce`)

<!-- end auto-generated rule header -->

Reduce is notoriously hard to understand, so it is logical to encapsulate every call within a function, that would have a descriptive name for what the reduce is doing.

## Rule Details

This rule aims to improve readability by enforsing all reduce calls to be wrapped in a function.

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

If you want to use `reduce` freely without wrapping it you can safely disable this rule.
