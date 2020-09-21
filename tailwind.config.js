const theme = require('tailwindcss/defaultTheme');
const { merge } = require('lodash');

module.exports = merge(
  {},
  {
    future: {
      removeDeprecatedGapUtilities: true,
      purgeLayersByDefault: true,
    },
    purge: {
      enabled: process.env.PURGE_TW === 'true',
      content: [
        './apps/**/*.html',
        './apps/**/*.ts',
        './libs/**/*.html',
        './libs/**/*.ts',
      ],
    },
    theme,
  }
);
