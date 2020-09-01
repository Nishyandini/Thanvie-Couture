const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cors = require('cors')

const productRoutes = require('./routes/product')
const userRoutes = require('./routes/user')

require('dotenv').config()


const app = express()

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true}).then(
    () => console.log('DB connected')
)
mongoose.connection.on('error', err =>{
    console.log(`db connection error : ${err.message}`)
});

//middlewears
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cookieParser())

app.use(productRoutes)
app.use(userRoutes)


const port = process.env.PORT || 8000

app.listen(port, () => {
    console.log("SERVER RUNNING...")
})