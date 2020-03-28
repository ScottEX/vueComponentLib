module.exports = {
    "env": {
        "browser": true,
        "es6": true
    },
    "parser": 'babel-eslint',
    "rules": {
        "vue/return-in-computed-property": 0
    },
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
    ]
};
