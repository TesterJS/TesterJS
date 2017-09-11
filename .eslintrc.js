module.exports = {
  "extends": "google",
  "parserOptions": {
    "ecmaVersion": 6
  },

  "env": {
    "browser": false,
    "mocha": true
  },


  "rules": {
    "indent": ["error", 2],
    "max-len": ["error", 120],
    "one-var": ["error",
      { var: "always", let: "always", const: "never" }
    ]
  }

};
