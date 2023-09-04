module.exports = {
    "extends": [
        "react-app",
        "airbnb"
    ],
    "env": {
        "browser": true
    },
    "rules": {
        "arrow-parens": [
            2,
            "as-needed"
        ],
        "array-bracket-newline": [
            "error",
            {
                "multiline": true,
                "minItems": 3
            }
        ],
        "array-element-newline": [
            "error",
            {
                "multiline": true,
                "minItems": 3
            }
        ],
        "camelcase": "off",
        "class-methods-use-this": "off",
        "comma-dangle": [
            "error",
            {
                "arrays": "always-multiline",
                "objects": "always-multiline",
                "imports": "always-multiline",
                "exports": "always-multiline",
                "functions": "never"
            }
        ],
        "import/extensions": "off",
        "import/no-extraneous-dependencies": "off",
        "import/no-unresolved": "off",
        "import/prefer-default-export": "off",
        "jsx-a11y/anchor-is-valid": [
            "error",
            {
                "components": [
                    "Link"
                ],
                "specialLink": [
                    "hrefLeft",
                    "hrefRight"
                ],
                "aspects": [
                    "invalidHref",
                    "preferButton"
                ]
            }
        ],
        "jsx-a11y/label-has-for": [
            2,
            {
                "required": {
                    "some": [
                        "nesting",
                        "id"
                    ]
                }
            }
        ],
        // "modules-newline/import-declaration-newline": [
        //     "error",
        //     {
        //         "meta": {
        //             "fixable": "code" // or "code" if applicable
        //         }
        //     }
        // ],
        // "modules-newline/export-declaration-newline": [
        //     "error",
        //     {
        //         "meta": {
        //             "fixable": "code" // or "code" if applicable
        //         }
        //     }
        // ],
        "multiline-ternary": [
            "warn",
            "always-multiline"
        ],
        "destructuring-newline/object-property-newline": 2,
        "newline-per-chained-call": [
            "error",
            {
                "ignoreChainWithDepth": 2,
            }
        ],
        "no-duplicate-imports": "error",
        "no-multiple-empty-lines": [
            "error",
            {
                "max": 1,
                "maxBOF": 0,
                "maxEOF": 1
            }
        ],
        "no-param-reassign": ["error", { "props": false }],
        "object-curly-newline": [
            "error",
            {
                "ObjectExpression": "always",
                "ObjectPattern": "always",
                "ImportDeclaration": {
                    "minProperties": 2,
                    "consistent": true,
                    "multiline": true
                },
                "ExportDeclaration": {
                    "minProperties": 2,
                    "consistent": true,
                    "multiline": true
                }
            }
        ],
        "operator-linebreak": [
            "error",
            "after"
        ],
        "padding-line-between-statements": [
            "error",
            {
                "blankLine": "always",
                "prev": "*",
                "next": [
                    "return",
                    "class",
                    "export",
                    "switch",
                    "throw",
                    "try",
                    "while",
                    "for",
                    "block",
                    "if"
                ]
            },
            {
                "blankLine": "always",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": "*"
            },
            {
                "blankLine": "any",
                "prev": [
                    "const",
                    "let",
                    "var"
                ],
                "next": [
                    "const",
                    "let",
                    "var"
                ]
            },
            {
                "blankLine": "any",
                "prev": [
                    "export"
                ],
                "next": [
                    "export"
                ]
            }
        ],
        "react/react-in-jsx-scope": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-curly-newline": "off",
        "react/jsx-props-no-spreading": "off",
        "react/no-did-update-set-state": "warn",
        "react-hooks/exhaustive-deps": "warn",
        "react-hooks/rules-of-hooks": "error",
        "react/jsx-max-props-per-line": [
            "error",
            {
                "maximum": 1
            }
        ],
        "react/jsx-fragments": [
            "error",
            "syntax"
        ],
        "sort-imports": [
            "error",
            {
                "ignoreCase": true,
                "ignoreDeclarationSort": true,
                "ignoreMemberSort": false,
                "memberSyntaxSortOrder": [
                    "single",
                    "multiple",
                    "all",
                    "none"
                ]
            }
        ],
        "sort-keys": [
            "error",
            "asc",
            {
                "caseSensitive": true,
                "natural": true
            }
        ],
        '@typescript-eslint/no-unused-vars': [1, { "ignoreRestSiblings": true }],
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".ts", ".tsx", ".json"]
            }
        },
        "import/internal-regex": "^(@/constants|@/interfaces|@/core|@/features|@/common|@/routes|@/utils|@/store|@/actions|@/reducers|@/selectors|@/themes|@/slices)"
    },
    "plugins": [
        "react-hooks",
        "modules-newline",
        "destructuring-newline"
    ]
}