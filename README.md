# create-meiyi

## Scaffolding Your First Vite MeiYi Project

> **Compatibility Note:**
> Vite requires [Node.js](https://nodejs.org/en/) version >=12.2.0. However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.

With NPM:

```bash
$ npm create meiyi@latest
```

With Yarn:

```bash
$ yarn create meiyi
```

With PNPM:

```bash
$ pnpm create meiyi
```

Then follow the prompts!

You can also directly specify the project name and the template you want to use via additional command line options. For example, to scaffold a Vite + Vue project, run:

```bash
# npm 6.x
npm create meiyi@latest my-vue-app --template vue

# npm 7+, extra double-dash is needed:
npm create meiyi@latest my-vue-app -- --template vue

# yarn
yarn create meiyi my-vue-app --template vue

# pnpm
pnpm create meiyi my-vue-app -- --template vue
```

Currently supported template presets include:

-   `vue`
-   `vue-ts`

## Community Templates

create-meiyi is a tool to quickly start a project from a basic template for popular frameworks. Check out Awesome Vite for [community maintained templates](https://github.com/vitejs/awesome-vite#templates) that include other tools or target different frameworks. You can use a tool like [degit](https://github.com/Rich-Harris/degit) to scaffold your project with one of the templates.

```bash
npx degit user/project my-project
cd my-project

npm install
npm run dev
```

If the project uses `main` as the default branch, suffix the project repo with `#main`

```bash
npx degit user/project#main my-project
```
