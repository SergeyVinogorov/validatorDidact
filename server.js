const express = require('express');
const PORT = 4000
const app = express();

app.use(express.static('./static/dist'));


app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})