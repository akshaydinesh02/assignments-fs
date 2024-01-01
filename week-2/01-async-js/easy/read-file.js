const express = require("express");
const fs = require("fs");

fs.readFile(`${__dirname}/test-file.txt`, "utf-8", (err, data) => {
  console.log("Data", data);
});

setTimeout(() => console.log("After file read code"), 5000);
