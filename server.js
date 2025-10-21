const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Azure Web App + GitHub Actions'dan merhaba!");
});

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışıyor`);
});
