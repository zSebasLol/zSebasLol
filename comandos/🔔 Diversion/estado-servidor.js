const util = require('minecraft-server-util')
const Discord = require('discord.js')

const options = {
    timetout: 1000 * 5,
    enableSRV: true
};

module.exports = {
    name: "estado-servidor",
    aliases: ["server-status"],
    desc: "Sirve para ver el estado de un servidor (solo funciona en servers premium)",

    run: async(client, message, args, prefix) => {

    }
}