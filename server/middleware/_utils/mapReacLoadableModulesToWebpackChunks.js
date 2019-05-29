import requireFileOrAbortIfFileDoNotExists from './requireFileOrAbortIfFileDoNotExists';

const path = require('path');
const buildDirectory = path.resolve(__dirname, '..', '..', '..', 'build');

const bundleStats = requireFileOrAbortIfFileDoNotExists(
  path.resolve(buildDirectory, 'bundle-stats.json'),
  'Because of the way we manage code-split when using SSR you need to add the parameter ' +
    "'--stats' to your 'npm run build', so it will be 'npm run build --stats'.\nFor more " +
    'information about it, look for code-split on the README.md file.'
);

const mapReacLoadableModulesToWebpackChunks = function(reactLoadableCaptureModules) {
  const bundles = [];
  reactLoadableCaptureModules.forEach(capturedModule => {
    if (bundles.indexOf(capturedModule) > -1) {
      return;
    }
    bundleStats.chunks.forEach(chunk => {
      if (chunk.initial) {
        return;
      }
      chunk.modules.forEach(module => {
        module.reasons.some(reason => {
          if (reason.userRequest === capturedModule) {
            chunk.files.forEach(file => bundles.push(bundleStats.publicPath + file));
            if (chunk.siblings) {
              bundleStats.chunks.forEach(subChunk => {
                if (chunk.siblings.indexOf(subChunk.id) === -1 || subChunk.initial) {
                  return;
                }
                subChunk.files.forEach(file => bundles.push(bundleStats.publicPath + file));
              });
            }
            return true;
          }
        });
      });
    });
  });
  return bundles.filter(file => !file.match('.map$'));
};

export default mapReacLoadableModulesToWebpackChunks;
