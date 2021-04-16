# Tailwind CSS preset for Storybook

One-line Tailwind CSS configuration for storybook.

## Basic usage

```
yarn add -D storybook-preset-tailwindcss css-loader sass sass-loader style-loader tailwindcss@latest postcss@latest autoprefixer@latest
```

Then add the following to `.storybook/main.js`:

```js
module.exports = {
  addons: ["storybook-preset-tailwindcss"],
}
```

## Advanced usage

You can pass configurations by using Object addon declaration for `storybook-preset-tailwindcss` and adding the configurations under the `option` key. You can pass configurations into the preset's webpack loaders using `styleLoaderOptions`, `cssLoaderOptions`, `postcssLoaderOptions` , and `sassLoaderOptions` keys. See documentation for each respective loader to learn about valid options. You can register other addons through the string declaration as normal.

```
module.exports = {
  addons: [
    {
      name: 'storybook-preset-tailwindcss',
      options: {
        cssLoaderOptions: {
           modules: true,
           localIdentName: '[name]__[local]--[hash:base64:5]',
        }
      }
    },
    // You can add other presets/addons by using the string declaration
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
  ]
}
```
