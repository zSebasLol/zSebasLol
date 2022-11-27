const mongoose = require('mongoose');
const { Schema } = require('mongoose')

let setup = new Schema({
    GuildID: String,
    Option: String,
    Channel: String,
    Days: String,
});

const model = mongoose.model("Setups-AntiLinks-Guilds", setup);

module.exports = model;