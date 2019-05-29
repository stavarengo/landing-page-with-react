process.stdout.write('Setting up Babel... ');
require('@babel/register')({
  configFile: false,
  ignore: [/(node_modules)/],
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        targets: {
          node: true,
        },
      },
    ],
    [
      'react-app',
      {
        useESModules: false,
      },
    ],
  ],
  plugins: ['react-loadable/babel', 'dynamic-import-node'],
});
console.log('Done!\n');

process.stdout.write(`Starting Express server... `);
require('./index');
