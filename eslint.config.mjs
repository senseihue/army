import withNuxt from "./.nuxt/eslint.config.mjs"
import unicorn from "eslint-plugin-unicorn"
import boundaries from "eslint-plugin-boundaries"
import pluginImport from "eslint-plugin-import"
import prettier from "eslint-config-prettier"

export default withNuxt(prettier, {
  plugins: { unicorn, boundaries, pluginImport },
  rules: {
    "import/order": "off",
    "vue/attributes-order": "off",
    "vue/require-default-prop": "off",
    "vue/no-multiple-template-root": "off",
    "unicorn/prevent-abbreviations": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "vue/component-name-in-template-casing": ["error", "kebab-case"],
    "unicorn/filename-case": ["error", { case: "kebabCase" }]
  }
})
