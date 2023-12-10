# eslint-plugin-named-reduce

Disallow `Array#reduce()` outside of a function specifically describing it

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-named-reduce`:

```sh
npm install eslint-plugin-named-reduce --save-dev
```

## Usage

Add `named-reduce` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "named-reduce"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "named-reduce/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->

| Name                                       | Description                                                   |
| :----------------------------------------- | :------------------------------------------------------------ |
| [named-reduce](docs/rules/named-reduce.md) | Disallow `Array#reduce()` outside of a function explaining it |

<!-- end auto-generated rules list -->


