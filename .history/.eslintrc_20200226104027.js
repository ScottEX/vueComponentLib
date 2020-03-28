module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": 'babel-eslint',
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "sourceType": "module"
    },
    "globals": {
        
    },
    "plugins": [
        'html',
        'vue'
    ],
};
