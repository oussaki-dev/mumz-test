process.env.EXPO_ROUTER_IMPORT_MODE = 'sync'; //sync, eager, lazy, lazy-once

module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      ['module:react-native-dotenv'],
      ["@babel/plugin-transform-private-methods", { "loose": true }],
      'nativewind/babel'],
  };
};