## Minimal Reproduce Repo

I've setup this repo to help debug [Composition API Issue #372](https://github.com/vuejs/composition-api/issues/372)

## Install instructions

`git clone git@github.com:Warz/issue372.git`

Then install plugin before project:

### Plugin
```
cd /plugin
npm install
```
then run:

`npm run build` or `npm run dev`

(just ignore http://localhost:8081/ popup)

### Project
```
cd /project
npm install
npm run dev
```

open the site in browser (http://localhost:8082/)