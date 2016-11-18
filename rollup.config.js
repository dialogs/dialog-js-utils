/**
 * Copyright 2016 Dialog LLC <info@dlg.im>
 */

import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';

const config = {
  entry: 'src/index.js',
  plugins: [
    json(),
    babel({
      babelrc: false,
      presets: [['@dlghq/dialog', { modules: false, helpers: true }]]
    })
  ],
  sourceMap: true,
  targets: [
    { dest: 'dist/index.js', format: 'cjs' },
    { dest: 'dist/index.es.js', format: 'es' }
  ]
};

export default config;
