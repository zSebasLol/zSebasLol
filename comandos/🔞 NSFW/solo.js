const Discord = require('discord.js')
const NSFW = require('discord-nsfw')
const nsfw = new NSFW();

module.exports = {
    name: "solo",
    aliases: [],

    run: async (client, message, args) => {
        if(!message.channel.nsfw) {
            return message.reply('❌ **Este canal no tiene permitido el envio de contenido +18**')
        }

        const image = await nsfw.solo();

        const solo = new Discord.EmbedBuilder()
        .setTitle('Disfrutalo 😋')
        .setImage(image)
        .setColor(client.color)
        .setFooter({text:" Dakison Content +18 | NSFW", iconURL:client.user.displayAvatarURL()})

        message.channel.send({ embeds: [solo] })
    }
}