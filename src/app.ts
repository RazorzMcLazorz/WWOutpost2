import express from 'express'
const port = process.env.PORT || 3000
const app = express()

// app.use(express.static(__dirname + '/dist/'));

// app.get('/', function (req, res) {
//   res.sendFile(__dirname + '/index.html');
// })

app.get('/', (req, res) => {
  res.send('Hello')
})

app.listen(port, () => console.log('Server Running'))