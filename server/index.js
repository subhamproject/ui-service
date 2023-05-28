const express = require('express');
const path = require('path');

const app = express();


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(require('cors')());


app.use('/api', require('./api'));

const staticPath = path.join(__dirname, '..', 'dist');
app.use(express.static(staticPath));

app.all('*', (req, res) => {
  const filepath = path.join(staticPath, 'index.html');
  res.sendFile(filepath);
});

const port = process.env.PORT || 8071;

const listener = app.listen(port);

listener.on('listening', () => {
  console.log('Server listening on port -', port);
})
