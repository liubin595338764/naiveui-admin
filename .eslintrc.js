module.exports = {
    extends: [
        // add more generic rulesets here, such as:
        // 'eslint:recommended',
        'plugin:vue/vue3-recommended',
        // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'indent': ['error', 4],
        'no-multiple-empty-lines': ['error', { "max": 1 }],
        "vue/html-indent": ["error", 4, {
            "attribute": 1,
            "baseIndent": 1,
            "closeBracket": 0,
            "alignAttributesVertically": true,
            "ignores": []
        }],
        "vue/max-attributes-per-line": ["error", {
            "singleline": {
                "max": 5
            },
            "multiline": {
                "max": 1
            }
        }], // 每行可接受的最大属性数量
        "vue/multiline-html-element-content-newline": ["error", {
            "ignoreWhenEmpty": true,
            "ignores": ["pre", "textarea"],
            "allowEmptyLines": false
        }],
        'vue/multi-word-component-names': 0,
        'vue/require-default-prop': 0,
        'vue/no-multiple-template-root': 0,
        'vue/no-lone-template': 0,
        'vue/no-v-model-argument': 0,
        'vue/one-component-per-file': 0
    }
}