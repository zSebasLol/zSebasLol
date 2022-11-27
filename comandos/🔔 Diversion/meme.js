const Discord = require('discord.js');
const spanishmeme = require('spanish.memes')

module.exports = {
  name: "meme", 
  alias: [], 

  run: async (client, message, args, prefix, channel) => {

    const meme = spanishmeme.Meme()

  const embedmeme = new Discord.EmbedBuilder()
  .setTitle("**Meme!**")
  .setImage(spanishmeme.Meme())
  .setColor("RANDOM")
  .setTimestamp()
  message.channel.send({embeds: [embedmeme]})

 }

} 