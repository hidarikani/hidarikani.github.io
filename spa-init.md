# Opinionated Checklist for Initializing a New Web Application

## Remember Preferred Node.js Version
First create config:

```shell
echo "lts/iron" > .nvmrc
```

... then switch to it:

```shell
nvm use
```

## Set up dev server.

I prefer the official Redux template for Vite:

```shell:

```shell
npx degit reduxjs/redux-templates/packages/vite-template-redux my-app
```

# Configure Code Linting and Formatting
Make sure that when pressing tab key or enter key, the code editors performs expected actions. Preferred EditorConfig:

```shell
# EditorConfig is awesome: https://EditorConfig.org

# top-most EditorConfig file
root = true

# Unix-style newlines with a newline ending every file
[*]
end_of_line = lf
insert_final_newline = true

# Matches multiple files with brace expansion notation
# Set default charset
[*.{ts,tsx,css}]
charset = utf-8
indent_style = space
indent_size = 2

# Tab indentation (no size specified)
[*.{yml,yaml}]
indent_style = tab
```

I prefer ESlint, with code formatting rules disabled, and Prettier.

```shell
npm install --save-dev --save-exact prettier
npx prettier . --write
npm install --save-dev husky lint-staged
npx husky install
npm pkg set scripts.prepare="husky install"
npx husky add .husky/pre-commit "npx lint-staged"
```

Add to package.json:

```json
{
  "lint-staged": {
    "**/*": "prettier --write --ignore-unknown"
  }
}
```

# References
- https://redux.js.org/introduction/getting-started#installation
- https://github.com/nvm-sh/nvm/blob/master/README.md
https://editorconfig.org/
- https://github.com/prettier/eslint-config-prettier/blob/main/README.md
- https://prettier.io/docs/en/install 