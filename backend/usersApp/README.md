# MongoDB and Node.js Integration Guide

## Initial Setup

### Installation

```bash
npm init
npm install express
npm install mongoose
```

### Project Structure
- app.js
- server.js

### Package.json Scripts
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "node --watch server.js"
}
```

## MongoDB Connection

```javascript
const mongoose = require("mongoose")
```

### MongoDB URI Setup
1. From MongoDB Compass, copy the connection string
2. Connect using:
```javascript
mongoose.connect("mongodb+srv://alkis:{πασγουορντ}@cluster0.8ioq6.mongodb.net/codingfactory?retryWrites=true&w=majority&appName=Cluster0")
  .then(/* your code */)
```

### Using Environment Variables
1. Create a `.env` file (add to .gitignore)
2. Add your MongoDB URI:
```
MONGODB_URI = m...
```
3. Update connection code:
```javascript
mongoose.connect(process.env.MONGODB_URI)
```
4. Update package.json scripts:
```json
"scripts": {
    "start": "node --env-file=.env server.js",
    "dev": "node --env-file=.env --watch server.js"
}
```

## Setting Up the API

### Basic Endpoints in app.js
```javascript
app.get("/api/users", (req, res) => {
    // Your code here
})

app.get("/api/users/user1", (req, res) => {
    // Your code here
})
```

### Project Structure
Create folders:
- routes
- models
- controllers

## Models

### User Model (models/user.model.js)
```javascript
const mongoose = require("mongoose")
const Schema = mongoose.Schema
let userSchema = new Schema({
  username: {
    type: String,
    required: [true, "username is required field"],
    unique: true,
  },
  password: {
    type: String,
    require: [true, "Password is required fiels"]
  }
},
{
  collection: 'users',
  timestamps: true
})

module.exports = mongoose.model("User", userSchema)
```

## Controllers

### User Controller (controllers/user.controller.js)
```javascript
const User = require('../models/user.model')

exports.findAll = async (req, res) => {
    const result = await User.find()
    res.json({
      status: true,
      data: result
    })
}
```

## Routes

### User Routes (routes/user.routes.js)
```javascript
const express = require('express')
const router = express.Router()
const userController = require('../controllers/user.controller')

router.get('/', userController.findAll)

module.exports = router
```

### Connect Routes in app.js
```javascript
const user = require('./routes/user.routes')
app.use('/api/users', user)
```

## Password Encryption

### Install bcrypt
```bash
npm install bcrypt
```

### Create User with Hashed Password
```javascript
const bcrypt = require('bcrypt')

exports.create = async (req,res) => {
  console.log("Create user");
  let data = req.body
  const SaltOrRounds = 10
  const hashedPassword = await bcrypt.hash(data.password, SaltOrRounds)

  const newUser = new User ({
    username: data.username,
    password: hashedPassword,
  })
  // Save user code would go here
}
```

## Authentication

### Auth Controller (controllers/auth.controller.js)
```javascript
const bcrypt = require('bcrypt');
const User = require('../models/user.model');
const authService = require('../services/auth.service');

exports.login = async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  
  try {
    const result = await User.findOne({username: username})
    console.log("User", result);
    const isMatch = await bcrypt.compare(password, result.password)
    if (result && isMatch){
      const token = authService.generateAccessToken(result)
      res.status(200).json({status: true, data: token});
    }
    // Error handling would go here
  } catch (error) {
    // Error handling
  }
}
```

### Auth Routes (routes/auth.routes.js)
```javascript
const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth.controller')

router.post('/login', authController.login);

module.exports = router
```

### Update app.js
```javascript
const auth = require('./routes/auth.routes')
app.use('/api/auth', auth)
```

## JWT Authentication

### Install JWT
```bash
npm install jsonwebtoken
```

### Generate Secret Token for .env
In command line:
```bash
require('crypto').randomBytes(64).toString('hex')
```

Add to .env:
```
TOKEN_SECRET='...'
```

### Auth Service (services/auth.service.js)
```javascript
const jwt = require('jsonwebtoken');

function generateAccessToken(user){
  console.log("Auth Service", user);

  const payload = {
    username: user.username,
    email: user.email,
    roles: user.roles
  }

  const secret = process.env.TOKEN_SECRET;
  const options = {expiresIn: '1h'};

  return jwt.sign(payload, secret, options);
}

function verifyAccessToken(token){
  const secret = process.env.TOKEN_SECRET;
  
  try {
    const payload = jwt.verify(token, secret);
    console.log("VerifyToken", payload);
    return { verified: true, data: payload }
  } catch (err) {
    return { verified: false, data: err.message }
  }
}

module.exports = { generateAccessToken, verifyAccessToken }
```

### Auth Middleware (middlewares/auth.middleware.js)
```javascript
const jwt = require('jsonwebtoken');
const authService = require('../services/auth.service');

function verifyToken(req, res, next) {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  const result = authService.verifyAccessToken(token);
  if (result.verified) {
    req.user = result.data
    next()
  } else {
    // Error handling
  }
}

module.exports = { verifyToken }
```

### Protect Routes
Update user.routes.js:
```javascript
const authMiddleware = require('../middlewares/auth.middleware')
router.post('/', authMiddleware.verifyToken, userController.create)
```

## API Documentation with Swagger

### Installation
```bash
npm install swagger-ui-express
npm install mongoose-to-swagger
```

### Create swagger.js in root
```javascript
const m2s = require('mongoose-to-swagger');
const User = require('./models/user.model');

exports.options = {
  "components": {
    "schemas": {
      User: m2s(User)
    },
    "securitySchemes": {
      "bearerAuth": {
        "type": "http",
        "scheme": "bearer",
        "bearerFormat": "JWT"
      }
    }
  },
  "security": [
    {"bearerAuth":[]}
  ],
  "openapi":"3.1.0",
  "info":{
    "version": "1.0.0",
    "title": "Users and Products CRUD API",
    "description":"An application for creating users and choosing product",
    "contact": {
      "name": "API Support",
      "url": "https://aueb.gr",
      "email":"support@example.com"
    }
  }
  // More configuration - see full example at:
  // https://github.com/mkarampatsis/coding-factory7-nodejs/blob/main/usersApp/swagger.js
}
```

### Update app.js
```javascript
const swaggerUI = require('swagger-ui-express')
const swaggerDocument = require('./swagger')

app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerDocument.options)
)
```

Access documentation at: http://localhost:3000/api-docs/#/

## Logging

### Installation
```bash
npm install winston
npm install winston-daily-rotate-file
npm install winston-mongodb
```

### Create logger (logger/logger.js)
```javascript
const winston = require('winston');

const logger = winston.createLogger(
  {
    format: winston.format.json(),
    transports: [
      new winston.transports.Console()
    ]
  }
)

module.exports = logger;
```

### Use in controller
```javascript
const logger = require('../logger/logger');

exports.findAll = async (req, res) => {
    // ...
    logger.info("INFO, Success in reading all users");
    logger.warn("INFO, Success in reading all users");
    // ...
}
```

## Git Setup

```bash
git init -b main
git remote add origin git@github.com:alkisax/cf7UsersApp.git
git pull origin main
git add .
git commit -m "Initialize project"
git push origin main
```

## Google OAuth Integration

### Setup in Google Cloud Console
1. Go to https://cloud.google.com/gcp -> console
2. Select project -> new project
3. Navigate to API and services -> credentials
4. Create credentials -> OAuth client ID
5. Configure consent screen
6. Create OAuth client -> web app
7. Set auth redirect URI -> http://localhost:3000/api/auth/google/callback

### Install Required Package
```bash
npm install google-auth-library
```

### Update app.js
```javascript
app.use('/api/auth', auth)
```

### Update auth.routes.js
```javascript
router.get('/google/callback', authController.googleLogin)
```

### Add to auth.controller.js
```javascript
const authService = require('../services/auth.service');

exports.googleLogin = async(req, res) => {
  const code = req.query.code
  if (!code) {
    res.status(400).json({status: false, data: "auth code is missing"})
  } else {
    let user = await authService.googleAuth(code)
    // Handle user login
  }
}
```

### Environment Variables
Add to .env:
```
GOOGLE_CLIENT_ID='...'
GOOGLE_CLIENT_SECRET='...'
REDIRECT_URI='http://localhost:3000/api/auth/google/callback'
```

### Update auth.service.js
```javascript
const { OAuth2Client } = require('google-auth-library')

async function googleAuth(code) {
  console.log("Google login", code);
  const CLIENT_ID = process.env.GOOGLE_CLIENT_ID;
  const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET;
  const REDIRECT_URI = process.env.REDIRECT_URI;

  const oauth2Client = new OAuth2Client(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

  try {
    // Exchange code for tokens
    const { tokens } = await oauth2Client.getToken(code)
    console.log("Step 1", tokens)
    oauth2Client.setCredentials(tokens)

    const ticket = await oauth2Client.verifyIdToken({
      idToken: tokens.id_token,
      audience: CLIENT_ID
    });

    console.log("Step 2")

    const userInfo = await ticket.getPayload();
    console.log("Google User", userInfo);
    return {user: userInfo, tokens}
  } catch (error) {
    console.log("Error in google authentication", error);
    return { error: "Failed to authenticate with google"}
  }
}

module.exports = { generateAccessToken, verifyAccessToken, googleAuth }
```
