const { EmbedBuilder } = require("discord.js"); 
const NSFW = require("discord-nsfw"); 
const nsfw = new NSFW();

module.exports = {
    name: "boobs",
    aliases: ["boob"],
    run: async (client, message, args) => { 
    if(!message.channel.nsfw) return message.channel.send(` ❌ | No puedo enviar el contenido porque este canal no tiene permitido el contenido +18 `) 
    const image = await nsfw.boobs(); 
    const embed = new EmbedBuilder() 
    .setTitle("Boobs Imagen")
    .setImage(image)
    .setColor(client.color)
    .setFooter({text:" Dakison Content +18 | NSFW", iconURL:client.user.displayAvatarURL()})
    message.channel.send({ embeds: [embed]}) 
   }
}