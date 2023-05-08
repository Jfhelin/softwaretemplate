const express = require('express');
const app = express();

// Set up routes
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

// Set up views
app.set('views', './views');
app.set('view engine', 'ejs');

// Start the server
const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});