module.exports = {
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "airbnb"
  ],
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "jsx": true,
      "experimentalObjectRestSpread": true
    }
  },
  "parser": "babel-eslint",
  "globals": {
    "browser": true,
    "element": true,
    "by": true
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true,
    "jest": true
  },
  "rules": {
    "react/jsx-filename-extension": [
      1,
      {
        "extensions": [
          ".js",
          ".jsx"
        ]
      }
    ],
    "linebreak-style": 0,
    "import/no-unresolved": 0,
    "react/jsx-props-no-spreading": 0,
    "react/forbid-prop-types": 0,
    "react/ no-array-index-key": 0,
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
    "eol-last": 2,
    "import/prefer-default-export": 0,
    "no-trailing-spaces": 0,
    "max-len": ["error", {
      "code": 150,
      "tabWidth": 2,
      "ignoreRegExpLiterals": true,
      "ignoreTemplateLiterals": true,
      "ignoreStrings": true,
      "ignoreUrls": true,
      "ignoreTrailingComments": true,
    }],
    "object-curly-newline": ["error", { "multiline": true, "minProperties": 2 }],
    "object-property-newline": 2,
    "object-curly-spacing": [2, "always"],
    "react/no-array-index-key": 0,
    "react/jsx-max-props-per-line": ["error", { "maximum": 1 }]
  }
}
