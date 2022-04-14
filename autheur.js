const mongoose = require("mongoose")

const AutheurSchema = new mongoose.Schema({
    titre: { type: String, required: True, unique: True },
    contenu: { type: String, required: True },
    uuid: { type: String, required: True },
    is_published: {
        type: Boolean,
        default: true
    }
})
module.exports = mongoose.model("autheur", AutheurSchema);