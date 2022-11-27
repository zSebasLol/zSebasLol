const Discord = require('discord.js')
const NSFW = require('discord-nsfw')
const nsfw = new NSFW();

module.exports = {
    name: "kitsune",
    aliases: [],

    run: async (client, message, args) => {
        if(!message.channel.nsfw) {
            return message.reply('❌ **El canal es olbigatorio que tenga permisos para contenido +18**')
        }

        const image = await nsfw.kitsune();

        const kitsune = new Discord.EmbedBuilder()
        .setTitle('Kitsune Image')
        .setImage(image)
        .setColor(client.color)
        .setFooter({text:" Dakison Content +18 | NSFW", iconURL:client.user.displayAvatarURL()})

        message.channel.send({ embeds: [kitsune] })
    }
}