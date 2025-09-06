# Among Us Sus Tracker

I'm making a sus tracker webpage/widget thing for Among Us. There are many others like it, but this one is mine.

[Now live on a Github Page!](https://rosefae.github.io/among-us-sus-tracker/)

## Scripts

`npm run serve`: Runs `eleventy --serve`. Compiles templates in `src` into `dist`, as well as copying over `_assets` and `_scripts` as-is. Also watches and serves the site to `localhost:8080`.

`npm run once`: Compiles templates and copies over `_assets` and `_scripts` once.

`npm run scss`: Runs `gulp`. Watches `src/_styles` and compiles `styles.scss` into `dist/_styles`.

`npm run oncescss`: Compiles SCSS files once.

`npm start`: Runs `serve` and `scss` concurrently.

`npm run build`: Compiles styles and 11ty stuff each once.

## File structure

```
src/
|- _assets/
|- _scripts/
|- _styles/
   |- _normalize.scss
   |- styles.scss
|- index.liquid
```