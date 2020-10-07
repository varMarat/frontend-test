const resolve = require('path').resolve;

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
    node: true,
    'jest/globals': true
  },
  extends: ['plugin:vue/recommended', 'plugin:jest/recommended', 'airbnb-base'],
  plugins: ['jest'],
  globals: {},
  settings: {
    'import/resolver': {
      webpack: {
        config: {
          resolve: {
            alias: {
              '~': __dirname,
              '~static': resolve(__dirname, 'static'),
              '~assets': resolve(__dirname, 'assets'),
              '~plugins': resolve(__dirname, 'plugins'),
              '~store': resolve(__dirname, '.nuxt/store'),
              '~router': resolve(__dirname, '.nuxt/router'),
              '~pages': resolve(__dirname, 'pages'),
              '~components': resolve(__dirname, 'components')
            }
          }
        }
      }
    }
  },
  rules: {
    'no-param-reassign': 'off',
    'import/prefer-default-export': 'off',
    'prefer-arrow-callback': 'off',
    'no-useless-escape': 'off',
    'func-names': 'off',
    'consistent-return': 'off',
    'no-empty-pattern': 'off',
    'max-len': 'off',
    'no-alert': 'off',
    'no-underscore-dangle': 'off',
    'no-plusplus': 'off',
    'vue/max-attributes-per-line': 'off',
    'vue/require-prop-types': 'off',
    'vue/html-self-closing': 'off', // sorry, this breakes my sublime text
    'vue/attributes-order': 'off',
    // allow debugger during development
    'import/no-extraneous-dependencies': 'off',
    'no-irregular-whitespace': 'off',
    'object-curly-newline': 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0
  }
};
