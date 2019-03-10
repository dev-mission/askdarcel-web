const express = require('express')
const app = express()
const port = process.env.PORT || 3000

app.use('/dist', express.static('build'))
app.use('/', express.static('build'))
app.get('/*', (req, res) => {
  res.sendFile(__dirname + '/build/index.html');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
