const mongoose = require('mongoose')
const { Schema, model } = mongoose
const sellerSchema = new Schema({})

module.exports = model('sellers',sellerSchema)