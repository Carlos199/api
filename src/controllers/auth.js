const mongoose = require('mongoose')
const model = require('../models/user')
const jwt = require('jsonwebtoken')
const randToken = require('rand-token')

exports.authUser = async (req, res) => {
  const { userName } = req.body
  // const result = await model.findOne({ userName: userName })
  // console.log(result)
  model.findOne({ userName: userName }, (err, docs) => {
    const accessToken = jwt.sign(
      {
        aud: 'AUTH',
        id: docs._id,
        userName: docs.userName,
        email: docs.email
      },
      'Hola',
      {
        expiresIn: '1h'
      }
    )
    const refreshToken = randToken.uid(256)
    if (docs) {
      res.send({ docs, accessToken, refreshToken })
    } else {
      res.status(404).send({ message: 'USER_NOT_EXISTS' })
    }
  })
}
