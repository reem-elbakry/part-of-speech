const { readFile } = require("fs");

//** Read and Parse json file data */
const jsonReader = (filePath, cb) => {
  readFile(filePath, "utf-8", (err, fileData) => {
    if (err) {
      return cb && cb(err);
    }

    try {
      // JSON.parse() sync .. unhandled error will block the code
      const dataObject = JSON.parse(fileData);
      return cb && cb(null, dataObject);
    } catch (err) {
      return cb && cb(err);
    }
  });
};

module.exports = { jsonReader };
