const ESLintPlugin = require('eslint-webpack-plugin');
  module.exports = {
    env: {
      browser: true,
      es2021: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:vue/essential',
      'plugin:@typescript-eslint/recommended'
    ],
    parserOptions: {
      ecmaVersion: 12,
      parser: '@typescript-eslint/parser',
      sourceType: 'module',
    },
    plugins: [
     new ESLintPlugin({
      // 'vue',
      // '@typescript-eslint',
      extensions: ['js', 'jsx', 'vue'], // الامتدادات التي سيتم فحصها
      exclude: 'node_modules', // استبعاد دليل node_modules
      fix: true, // تمكين الإصلاح التلقائي للأخطاء
     })
    ],
    resolve: {
      extensions: ['.js', '.jsx', 'vue'], // الامتدادات التي سيتم حلها تلقائيًا
    },
    rules: {
      // أضف قواعدك هنا
    },s
  };
  