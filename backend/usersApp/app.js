const express = require("express")
const app = express()
const cors = require('cors');
app.use(express.json())
app.use(express.urlencoded({extended:false}));

const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger')

const user = require('./routes/user.routs')
const userProduct = require('./routes/user.products.routes')
const auth = require('./routes/auth.routs')

// app.use(cors ({
//   // origin: '*'
//   origin: ['http://localhost:3000']
// }))

app.use('/api/users', user)
app.use('/api/user-product', userProduct)
app.use('/api/auth', auth)

app.use('/', express.static('files')) // οταν πάει στο ρουτ της εφαρμογής να ανοίξει τον φάκελο files. θα ανόιξει αυτομάτος το αρχείο Index.html

app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument.options)
)

module.exports = app