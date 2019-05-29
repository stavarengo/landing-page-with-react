const fs = require('fs');

const requireFileOrAbortIfFileDoNotExists = function(filePath, why, requireFunction) {
  if (fs.existsSync(filePath)) {
    if (!requireFunction) {
      requireFunction = require;
    }
    return requireFunction(filePath);
  }
  console.log(`\nFile "${filePath}" not found.`);
  console.log(why);
  process.exit(1);
};

export default requireFileOrAbortIfFileDoNotExists;
