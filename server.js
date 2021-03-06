
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors')


const port = process.env.PORT || 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));



if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  // app.use(express.static(path.join(__dirname, 'client/build')));
  app.use(express.static(path.resolve(__dirname, './client/build')));

  // Handle React routing, return all requests to React app
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(port, () => console.log(`Listening on port ${port}`));


