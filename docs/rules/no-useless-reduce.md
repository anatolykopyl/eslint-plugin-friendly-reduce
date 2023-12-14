# Disallow the usage of useless reduce (`friendly-reduce/no-useless-reduce`)

<!-- end auto-generated rule header -->

If the reducer returns the same variable it received as the accumulator, 
then the reduce should be replaced with a for-loop.

## Rule Details

Examples of **incorrect** code for this rule:

```js

array.reduce((acc, curr) => {
  acc.push(curr)
  return acc
})

```

Examples of **correct** code for this rule:

```js

array.reduce((acc, curr) => {
  return acc + curr
})

```

## When Not To Use It

If you want to use `reduce` freely you can safely disable this rule.
