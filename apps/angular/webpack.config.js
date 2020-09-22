const { join } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss-scss',
            syntax: 'postcss-scss',
            plugins: [
              'postcss-import',
              require('tailwindcss')(join(__dirname, './tailwind.config.js')),
              'autoprefixer',
            ],
          },
        },
      },
    ],
  },
};
