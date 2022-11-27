const NSFW = require("discord-nsfw");
const nsfw = new NSFW();
const { MessageEmbed } = require('discord.js');

module.exports = {
  name: "pussy",
  aliases: [],
  run: async(client, message, prefix, args) => {

    if(!message.channel.nsfw) {
        return message.channel.send("❌ **Este canal no tiene permitido enviar contenido**")
    }
       const embed = new EmbedBuilder()
       .setTitle('Disfrutalo 😋')
       .setColor(client.color)
       .setFooter({text:" Dakison Content +18 | NSFW", iconURL:client.user.displayAvatarURL()})
       .setImage(await nsfw.pussy())
       message.reply({ embeds: [embed] });
    }
}