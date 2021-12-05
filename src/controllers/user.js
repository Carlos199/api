const mongoose = require('mongoose')
const model = require('../models/user')

const options = {
  page: 1,
  limit: 10
}

const parseId = id => {
  return mongoose.Types.ObjectId(id)
}

// OBTENER DATOS DE USUARIO
exports.getData = (req, res) => {
  model.paginate({}, options, (err, docs) => {
    res.send({
      items: docs
    })
  })
}

// GUARDAR NUEVO USUARIO

exports.insertData = (req, res) => {
  const data = req.body
  model.create(data, (err, docs) => {
    if (err) {
      res.send({ error: 'key duplicate' }, 422)
    } else {
      res.send({ data: docs })
    }
  })
}

// UPDATE DATA USER

exports.updateData = async (req, res) => {
  const { id } = req.body
  console.log(req.body.id, 'datos')
  const body = req.body
  console.log(body)
  const result = await model.findById(id)
  result.name = body.name
  result.apellido = body.apellido
  result.email = body.email
  result.save()
  res.status(200).send({ result: result })
}

exports.deleteData = async (req, res) => {
  const { id } = req.body
  const result = await model.findById(id)
  console.log(result)
  if (result) {
    result.remove()
    res.status(200).send({ result: result })
  } else {
    res.status(404).send({ message: 'USER_NOT_FOUND' })
  }
}
