# eslint-plugin-promise-local-handling

Adds a rule that checks that promises are not stored in global variables

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-promise-local-handling`:

```
$ npm install eslint-plugin-promise-local-handling --save-dev
```


## Usage

Add `promise-local-handling` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "promise-local-handling"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "promise-local-handling/rule-name": 2
    }
}
```

## Supported Rules

* Fill in provided rules here





