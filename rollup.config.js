import commonjs from 'rollup-plugin-commonjs';
import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';

const pkg = require('./package.json');

export default {
  input: 'src/TypedJs.svelte',
  output: [
    { file: pkg.module, format: 'es' },
    { file: pkg.main, format: 'umd', name: 'TypedJs' },
  ],
  plugins: [
    svelte(),
    resolve(),
    commonjs({
      include: /node_modules/,
      namedExports: {
        'typed.js': ['Typed'],
      },
    }),
  ],
};
