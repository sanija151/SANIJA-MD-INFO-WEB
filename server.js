const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 3000;

// Serve local JSON file
app.get("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("main_var.json", "utf-8"));
  res.send(`
    <html>
      <head>
        <title>SANIJA BOT INFO</title>
        <style>
          body { background: #000; color: #0f0; font-family: monospace; padding: 20px; }
          pre { background: #111; padding: 10px; border-radius: 10px; }
        </style>
      </head>
      <body>
        <h1>🔰 SANIJA BOT - CUSTOM JSON</h1>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`✅ Server is running on http://localhost:${port}`);
});
