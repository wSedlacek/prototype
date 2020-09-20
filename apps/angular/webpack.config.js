const { join } = require('path');

module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/i,
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
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
