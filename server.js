const express = require('express');
const app = express();
const index = require('./index');
const port = process.env.PORT || 5000;

app.use('/', index);

app.listen(port, "0.0.0.0", () => {
  console.log(`Server started on port ${port}`);
});
