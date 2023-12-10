# eslint-plugin-friendly-reduce

Ensure best practices when dealing with `Array#reduce()`


## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-friendly-reduce`:

```sh
npm install eslint-plugin-friendly-reduce --save-dev
```

## Usage

Add `friendly-reduce` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "friendly-reduce"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "friendly-reduce/wrap-reduce": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                     | Description                                                   |
| :--------------------------------------- | :------------------------------------------------------------ |
| [wrap-reduce](docs/rules/wrap-reduce.md) | Disallow `Array#reduce()` outside of a function explaining it |

<!-- end auto-generated rules list -->
