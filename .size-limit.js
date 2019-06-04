const fs = require('fs');
var path = require('path');

let jsBundlesDir = `${__dirname}/build/static/js`;
var jsBundlesRelativeDir = path.relative(__dirname, jsBundlesDir);

module.exports = [
  {
    path: ['build/static/js/main.*.js', 'build/static/js/runtime~main.*.js'],
    limit: '15 KB',
    webpack: false,
    gzip: true,
    running: false,
  },
];

fs.readdirSync(jsBundlesDir)
  .filter(file => file.match(/\d{1,3}\..+?\.chunk.js$/))
  .forEach(file => {
    module.exports.push({
      path: [`${jsBundlesRelativeDir}/${file}`],
      limit: '99 KB',
      webpack: false,
      gzip: true,
      running: false,
    });
  });
