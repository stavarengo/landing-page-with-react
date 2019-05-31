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
  plugins: [
    'react-loadable/babel',
    'dynamic-import-node',
    [
      'transform-assets',
      {
        extensions: ['svg'],
        name: 'static/media/[name].[hash:8].[ext]',
      },
    ],
  ],
});
console.log('Done!\n');

process.stdout.write(`Starting Express server... `);
require('./index');
