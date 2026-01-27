const express = require("express");
const fs = require("fs");
const path = require("path");
const multer = require("multer");

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_DIR = "/data";

// upload config
const storage = multer.diskStorage({
  destination: DATA_DIR,
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage });

// Ana sayfa
app.get("/", (req, res) => {
  res.send("Velero PVC File Server 🚀");
});

// Dosya listeleme
app.get("/files", (req, res) => {
  fs.readdir(DATA_DIR, (err, files) => {
    if (err) return res.status(500).send(err.message);
    res.json(files);
  });
});

// Dosya indirme
app.get("/files/:name", (req, res) => {
  const filePath = path.join(DATA_DIR, req.params.name);
  if (!fs.existsSync(filePath)) {
    return res.status(404).send("File not found");
  }
  res.download(filePath);
});

// Dosya upload
app.post("/upload", upload.single("file"), (req, res) => {
  res.send("File uploaded successfully");
});

app.listen(PORT, () => {
  console.log(`File server ${PORT} portunda çalışıyor`);
});
