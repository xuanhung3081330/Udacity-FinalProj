module.exports = {
    ignorePatterns: ['build/', 'dist/', 'node_modules/'],
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    plugins: ['react', 'prettier'],
    settings: {
      react: {
        version: 'detect',
      },
    },
    parser: '@babel/eslint-parser',
    parserOptions: {
      ecmaVersion: 'latest',
      requireConfigFile: false,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      babelOptions: {
        presets: ["@babel/preset-react"]
      }
    },
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
    },
    rules: {
      'prettier/prettier': [
        'off',
        {
          singleQuote: true,
          jsxSingleQuote: false,
          printWidth: 120
        },
      ],
      // Customize your rules here
      'react/prop-types': process.env.FAIL_LINT ? 2 : 0,
      'react/jsx-uses-vars': 'warn',
    },
  };
  