const path = require('path');
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'app/')));

app.listen(port, () => {console.log(`your-box by @guicheffer running at http://localhost:${port}/`)});
