const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: "hentai",
  aliases: [],
  run: async(client, message, prefix, args) => {

    if(!message.channel.nsfw) {
        return message.channel.send("❌ **No puedo enviar contenido +18 en este canal**")
    }
       embed = new EmbedBuilder()
       .setTitle('Hentai Imagen')
       .setColor(client.color)
       .setImage(await nsfw.hentai())
       .setFooter({text:" Dakison Content +18 | NSFW", iconURL:client.user.displayAvatarURL()})
       message.reply({ embeds: [embed] });
    }
}