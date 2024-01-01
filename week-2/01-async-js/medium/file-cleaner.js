const fs = require("fs");
const path = require("path");

fs.readFile(
  path.join(__dirname, "../easy/test-file.txt"),
  "utf-8",
  (err, data) => {
    const cleanedData = data.replace(/\s+/g, " ");

    fs.writeFile(
      path.join(__dirname, "../easy/test-file.txt"),
      cleanedData,
      (err) => {
        if (err) {
          console.log("Error while writing to file", err);
        } else {
          console.log("Data written to file successfully");
        }
      }
    );
  }
);
