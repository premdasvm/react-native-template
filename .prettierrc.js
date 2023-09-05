module.exports = {
  arrowParens: "avoid",
  bracketSameLine: true,
  bracketSpacing: true,
  singleQuote: false,
  trailingComma: "all",
  useTabs: true,
  tabWidth: 4,
  endOfLine: "lf",
  htmlWhitespaceSensitivity: "css",
  printWidth: 100,
  proseWrap: "preserve",
  requirePragma: false,
  semi: true,
  vueIndentScriptAndStyle: true,
  overrides: [
    {
      files: "*.json",
      options: {
        printWidth: 200,
      },
    },
  ],
};
