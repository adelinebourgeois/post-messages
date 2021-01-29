module.exports = {
    "extends": "eslint:recommended",
    "plugins": [
        "react-hooks"
    ],
    "rules": {
        "react-hooks/rules-of-hooks": "error", // check hook rules
        "react-hooks/exhaustive-deps": "warn"  // check dependencies
    }
}