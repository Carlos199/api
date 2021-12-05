const mongoose = require('mongoose')

const DB_URI = `mongodb+srv://luiscarlos:luiscarlos@cluster0.rukgx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

module.exports = () => {
  const connect = () => {
    mongoose.connect(
      DB_URI,
      {
        keepAlive: true,
        useNewUrlParser: true,
        useUniFiedTopology: true
      },
      err => {
        if (err) {
          console.log('DB ERROR')
        } else {
          console.log('conexion correcta')
        }
      }
    )
  }
  connect()
}
