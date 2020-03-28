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
        "client": true,
        "tools": true,
        "__VUE__": true,
        "require": true,
        "rootPath": true,
        "process": true,
        "__dirname": true,
        "module": true,
        "exports": true,
        "AlipayJSBridge": true,
        "MPSImageProdUrl": true,
        "PBImageProdUrl": true
    },
    "plugins": [
        'html',
        'vue'
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {
                "MemberExpression": 1,
                "SwitchCase": 1,
                "FunctionDeclaration": {
                    "parameters": "first"
                },
                "ObjectExpression": 1,
                "CallExpression": {
                    "arguments": "first"
                }
            }
        ],
        /*  "linebreak-style": [
             "error",
             "unix"
         ], */
        "linebreak-style": [
            "off",
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "warn",
            "always"
        ],
        "no-console": "off",
        "curly": ["error", "multi-line"], // 要求遵循大括号约定
        "eqeqeq": ["warn", "always"], // 要求使用 === 和 !==
        "no-var": "error", // 禁止使用var, 请使用let 和 const
        // "sort-imports": "error",
        "array-bracket-newline": ["error", {
            "multiline": true
        }], // 数组统一规范
        // "array-bracket-spacing": "error", // 数组统一规范
        "properties": "always", // 驼峰命名
        "eol-last": ["error", "always"], // 文件末尾至少存在一行空行
        "func-call-spacing": ["error", "never"], // 调用方法与()之间不能有空格
        "no-trailing-spaces": "error",
        "space-infix-ops": ["error", {
            "int32Hint": false
        }], // 要求中缀操作符周围有空格
        // 指定数组的元素之间要以空格隔开(, 后面)， never参数：[ 之前和 ] 之后不能带空格，always参数：[ 之前和 ] 之后必须带空格
        "array-bracket-spacing": [2, "never"],
        // 控制逗号前后的空格
        "comma-spacing": [2, { "before": false, "after": true }],
        // 对象字面量中冒号的前后空格
        "key-spacing": [0, { "beforeColon": false, "afterColon": true }],
        "no-case-declarations": "off"
    }
};
