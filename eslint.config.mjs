import withNuxt from "./.nuxt/eslint.config.mjs"
import unicorn from "eslint-plugin-unicorn"
import prettier from "eslint-config-prettier"

export default withNuxt(prettier, {
  plugins: { unicorn },
  rules: {
    "import/order": "off",
    "vue/attributes-order": "off",
    "vue/require-default-prop": "off",
    "vue/no-multiple-template-root": "off",
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "unicorn/prevent-abbreviations": "off",
    "unicorn/filename-case": ["error", { case: "kebabCase" }]
  }
})
