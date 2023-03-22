/*
👋 Hi! This file was autogenerated by tslint-to-eslint-config.
https://github.com/typescript-eslint/tslint-to-eslint-config

It represents the closest reasonable ESLint configuration to this
project's original TSLint configuration.

We recommend eventually switching this configuration to extend from
the recommended rulesets in typescript-eslint. 
https://github.com/typescript-eslint/tslint-to-eslint-config/blob/master/docs/FAQs.md

Happy linting! 💖
*/
module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "project": "tsconfig.json",
        "sourceType": "module"
    },
    "extends": [
        'eslint:recommended',
        //'plugin:jsdoc/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        /*
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier',
        'prettier/@typescript-eslint',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
        'plugin:unicorn/recommended',
        'plugin:jest-dom/recommended',
        'plugin:jsx-a11y/recommended',
        */
    ],
    "plugins": [
        "eslint-plugin-jsdoc",
        "@typescript-eslint"
    ],
    "root": true,
    "rules": {
        '@typescript-eslint/no-unused-vars': [
          'warn',
          {
            varsIgnorePattern: '.*', // TS already enforces this
            args: 'none',
            ignoreRestSiblings: true,
          },
        ],
        'no-unused-vars': 'off',
        'unused-imports/no-unused-vars': 'off',
        'no-constant-condition': ['error', { checkLoops: false }],
        'no-dupe-class-members': 'off',
        'no-redeclare': 'off',
        'prefer-rest-params': 'off',
        '@typescript-eslint/no-inferrable-types': ['error', { ignoreParameters: true }],
        '@typescript-eslint/no-non-null-assertion': 'off',
        '@typescript-eslint/no-unsafe-assignment': 'off',
        /*
        "@typescript-eslint/indent": "off",
        "@typescript-eslint/member-delimiter-style": [
            "off",
            {
                "multiline": {
                    "delimiter": "none",
                    "requireLast": true
                },
                "singleline": {
                    "delimiter": "semi",
                    "requireLast": false
                }
            }
        ],
        '@typescript-eslint/naming-convention': [
           'off',
           {
             // Properties and destructured variables often can't be controlled by us if the API is external.
             // Event logging, `__typename` etc don't follow conventions enforceable here.
             // We also need to allow implementing external interface methods, e.g. UNSAFE_componentWillReceiveProps().
             selector: 'default',
             format: null,
           },
           {
             // Helps e.g. Go engineers who are used to lowercase unexported types.
             selector: 'typeLike',
             format: ['PascalCase'],
             leadingUnderscore: 'allow',
             trailingUnderscore: 'allow',
           },
         ],
        "@typescript-eslint/no-empty-function": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/prefer-namespace-keyword": "error",
        "@typescript-eslint/quotes": "off",
        "@typescript-eslint/semi": [
            "off",
            null
        ],
        "@typescript-eslint/type-annotation-spacing": "off",
        "arrow-parens": [
            "off",
            "always"
        ],
        "brace-style": [
            "off",
            "off"
        ],
        "comma-dangle": "off",
        "curly": "error",
        "eol-last": "off",
        "eqeqeq": [
            "error",
            "smart"
        ],
        "id-denylist": [
            "error",
            "any",
            "Number",
            "number",
            "String",
            "string",
            "Boolean",
            "boolean",
            "Undefined",
            "undefined"
        ],
        "id-match": "error",
        "indent": "off",
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/newline-after-description": "error",
        "linebreak-style": "off",
        "max-len": "off",
        "new-parens": "off",
        "newline-per-chained-call": "off",
        "no-empty": "error",
        "no-empty-function": "off",
        "no-eval": "error",
        "no-extra-semi": "off",
        "no-irregular-whitespace": "off",
        "no-multiple-empty-lines": "off",
        "no-redeclare": "error",
        "no-trailing-spaces": "off",
        "no-underscore-dangle": "off",
        "no-unused-expressions": "off",
        "no-var": "error",
        "one-var": [
            "error",
            "never"
        ],
        "padded-blocks": [
            "off",
            {
                "blocks": "never"
            },
            {
                "allowSingleLineBlocks": true
            }
        ],
        "quote-props": "off",
        "quotes": "off",
        "semi": "off",
        "space-before-function-paren": "off",
        "space-in-parens": [
            "off",
            "never"
        ],
        "spaced-comment": [
            "error",
            "always",
            {
                "markers": [
                    "/"
                ]
            }
        ]
        */
    }
};