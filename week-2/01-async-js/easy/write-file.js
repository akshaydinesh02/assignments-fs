const express = require("express");
const fs = require("fs");

const testData = "This is test data to write into a file";

fs.writeFile(`${__dirname}/new-write-file.txt`, testData, (err) => {
  if (err) {
    console.log("Error while writing to file", err);
  } else {
    console.log("Data written to file successfully");
  }
});
