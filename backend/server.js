const express = require('express')
const mongoose = require('mongoose')
const pizzasRoute = require('./routes/pizzasRoute')

const MONGODB_URI = 'mongodb://localhost:27017/Peric-pizza'
mongoose
  .connect(MONGODB_URI)
  .then(() => console.log('Connected to DB'))
  .catch(err => console.log(err.message))

const app = express()
app.use(express.json())

app.use('/api/pizzas/', pizzasRoute)

app.get('/', (req, res) => res.send('Server is running!'))

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server running on port ${port}`))
