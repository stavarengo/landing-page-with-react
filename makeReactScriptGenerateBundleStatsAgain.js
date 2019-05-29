const makeReactScriptGenerateBundleStatsAgain = function(cb) {
  const path = require('path');
  const reactScriptPaths = require('react-scripts/config/paths');
  const BUNDLE_FILE_NAME = reactScriptPaths.appBuild + '/bundle-stats.json';
  const fs = require('fs');
  const rootDir = __dirname;
  const filePath = path.resolve(rootDir, 'node_modules', 'react-scripts', 'scripts', 'build.js');
  const relativeFilePath = filePath.replace(rootDir + '/', '');
  const relativeBundleFileName = BUNDLE_FILE_NAME.replace(rootDir + '/', '');

  console.log('|----------------------------------------------');
  console.log(
    `| We are going to modify the file "${relativeFilePath}" in order to generate the file "${relativeBundleFileName}".`
  );
  console.log(`| This is need since the flag "--stats" was removed from "react-scripts".`);
  console.log(`| For more information about the depretiation of the "--stats", see:`);
  console.log(`|  - https://github.com/facebook/create-react-app/pull/6477`);
  console.log(`|  - https://github.com/facebook/create-react-app/issues/6904`);
  console.log(`|`);

  if (!fs.existsSync(filePath)) {
    console.log(`| \nFile "${relativeFilePath}" not found.`);
    console.log(
      `| We expected to find this file in order to add the code that generates the file ${relativeBundleFileName}.`
    );
    console.log('|----------------------------------------------');
    cb(false);
    return;
  }

  let fileContent = fs.readFileSync(filePath, 'utf8');
  let whereToPutNewContent = / +?return resolve\(({\n +?stats,\n +?previousFileSizes,\n +?warnings: messages.warnings,\n +?})\);/;
  let regexToMatchNewContent = / +?\/\/ STAVARENGO/;
  let newValue = `
      // STAVARENGO
      const bfj = require('bfj');
      const resolveArgs = $1;
      return bfj
        .write('${BUNDLE_FILE_NAME}', stats.toJson())
        .then(() => resolve(resolveArgs))
        .catch(error => reject(new Error(error)));
`;

  let result = false;
  let printMessagesTellingToCheckIfStatsWasAddedBack = false;
  const relativeFilename = __filename.replace(rootDir + '/', '');
  if (fileContent.match(/--stats/)) {
    printMessagesTellingToCheckIfStatsWasAddedBack = true;
    console.log(`| We find the string "--stats" inside the file "${relativeFilePath}".`);
    console.log(
      `| This could mean nothing, or it could mean that the flag "--stats" was added back to "react-scripts.`
    );
  } else if (!fileContent.match(whereToPutNewContent) && !fileContent.match(regexToMatchNewContent)) {
    printMessagesTellingToCheckIfStatsWasAddedBack = true;
    console.log(`| Could not find the line where the new content should be place.`);
    console.log(
      `| This could happen because the content of the file "${relativeFilePath}" has changed since the script "${relativeFilename}" was created.`
    );
    console.log(`| If that is the case, you first must check if the "--stats" flat was added back to "react-scripts".`);
  } else if (!fileContent.match(regexToMatchNewContent)) {
    printMessagesTellingToCheckIfStatsWasAddedBack = false;
    fileContent = fileContent.replace(whereToPutNewContent, newValue);
    fs.writeFileSync(filePath, fileContent);

    if (fileContent.match(regexToMatchNewContent)) {
      result = true;
      console.log('| Success! File modified.');
    } else {
      console.log(`| Some unexpected happens.`);
      console.log(`| We could not find the new content after saving the file "${relativeFilePath}".`);
    }
  } else {
    printMessagesTellingToCheckIfStatsWasAddedBack = false;
    result = true;
    console.log('| Success! File has already been modified.');
  }

  if (printMessagesTellingToCheckIfStatsWasAddedBack) {
    console.log('|');
    console.log(`| Please check whether or not the flag "--stats" was added back, and:`);
    console.log(`|  - If it was not added back, updated the script "${relativeFilename}" to avoid this message.`);
    console.log(`|  - it it was added back, you can delete the script "${relativeFilename}".`);
  }
  console.log('|----------------------------------------------\n');

  cb(result);
};

makeReactScriptGenerateBundleStatsAgain(function(_continue) {
  if (!_continue) {
    process.exit(1);
  }
});
