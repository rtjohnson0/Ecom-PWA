require('dotenv').config()

const express = require('express')
const logger = require('morgan')
const mongoose = require('mongoose')
const usersRoutes = require('./routes')

const app = express()

const PORT = process.env.PORT || 3001

mongoose.set('useCreateIndex', true)
if (process.env.NODE_ENV === "production") {
	app.use(express.static("client/build"));
	uri = process.env.ATLAS_URI  // connection string for Atlas here  
  } else {
	uri = process.env.LOCAL_URI   // connection string for localhost mongo here  
  }
  
  // connection to database
  mongoose.connect(process.env.ATLAS_URI, { 
	useNewUrlParser: true,
	useFindAndModify: false,
	useCreateIndex: true 
  });
  const connection = mongoose.connection;
  connection.once('open', () => {
	console.log("MongoDB connection is live");
  })

app.use(express.static(`${__dirname}/client/build`))
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.get('/api', (req, res) => {
	res.json({message: "API root"})
})

app.use('/api/users', usersRoutes)
app.use('/users/?*', function(){});

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
