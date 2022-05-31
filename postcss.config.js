// https://tailwindcss.com/docs/using-with-preprocessors#using-post-css-as-your-preprocessor
// https://tailwindcss.com/docs/using-with-preprocessors#nesting
module.exports = {
  plugins: [
    'postcss-import',
    'tailwindcss/nesting',
    'tailwindcss',
    'postcss-flexbugs-fixes',
    [
      'postcss-preset-env',
      {
        autoprefixer: {
          flexbox: 'no-2009',
        },
        stage: 3,
        features: {
          'nesting-rules': false,
          'custom-properties': false,
        },
      },
    ],
  ],
};
