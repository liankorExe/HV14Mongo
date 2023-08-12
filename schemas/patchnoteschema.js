const mongoose = require("mongoose")

const patchnoteschema = new mongoose.Schema({
    date: { type: String },
    titre: { type: String },
    code: { type: String },
})

const model = mongoose.model("patchnoteschema", patchnoteschema)

module.exports = model;