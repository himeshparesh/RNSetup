module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        cwd: 'babelrc',
        extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
        alias: {
          '@root': './src',
        },
      },
    ],
    'jest-hoist',
    'react-native-reanimated/plugin',
  ],
};
