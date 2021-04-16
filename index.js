function wrapLoader(loader, options) {
  if (options === false) {
    return []
  }

  return [
    {
      loader,
      options,
    },
  ]
}

const DEFAULT_POST_CSS_OPTIONS = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}

function webpack(webpackConfig = {}, options = {}) {
  const { module = {} } = webpackConfig
  const {
    styleLoaderOptions,
    cssLoaderOptions,
    sassLoaderOptions,
    postcssLoaderOptions,
    rule = {},
  } = options

  return {
    ...webpackConfig,
    module: {
      ...module,
      rules: [
        ...(module.rules || []),
        {
          test: /\.s[ca]ss$/,
          ...rule,
          use: [
            ...wrapLoader(require.resolve("style-loader"), styleLoaderOptions),
            ...wrapLoader(require.resolve("css-loader"), cssLoaderOptions),
            ...wrapLoader(
              require.resolve("postcss-loader"),
              Object.assign({}, DEFAULT_POST_CSS_OPTIONS, postcssLoaderOptions)
            ),
            ...wrapLoader(require.resolve("sass-loader"), sassLoaderOptions),
          ],
        },
      ],
    },
  }
}

module.exports = { webpack }
