const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

const DATA_PATH = "/data";

app.get("/", (req, res) => {
  res.send("Velero PVC Test App 🚀");
});

app.get("/files", (req, res) => {
  fs.readdir(DATA_PATH, (err, files) => {
    if (err) {
      return res.status(500).json({
        error: "Data path okunamadı",
        details: err.message,
      });
    }

    res.json({
      path: DATA_PATH,
      files: files,
    });
  });
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
  console.log(`Listing files from ${DATA_PATH}`);
});
