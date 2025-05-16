const mongoose = require ("mongoose")
const app = require('./app')
const port = 3000

mongoose.connect(process.env.MONGODB_URI)
  .then(
    () => {
      console.log("connection to mongoDB established");
      app.listen(port, () => {
        console.log("server connected at port 3000")  
      })
    },
    err => { 
      console.log(" failed to connect to MongoDB", err);
    }
  )



