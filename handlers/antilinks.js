const secureSchema = require(`${process.cwd()}/modelos/antilinks.js`);
const { EmbedBuilder } = require('discord.js');
const ms = require('ms');
module.exports = client => {
    client.on('messageCreate', async message => {
     let secureData = await secureSchema.findOne({ GuildId: message.guild.id })
    if(secureData) {
    if(
      message.content.match("https://") ||
      message.content.match("discord.gg") ||
      message.content.match("www.") ||
      message.content.match(".com")
    ) {
 if (message.member.permissions.has('ManageGuild')) return;  if(message.member.permissions.has('Administrator')) return;
    message.delete();
    let tiempo = 600000;
    const time = ms(tiempo);
    const razon = 'Tu mensaje contiene un Links!';
    await message.member.timeout(tiempo, razon);
    const E = new EmbedBuilder()
    .setTitle('<a:AlertBotLuna:1016752635249950750> ANTI-LINKS <a:AlertBotLuna:1016752635249950750>')
    .setTimestamp()
    .setColor('Red')
    .setDescription(`Hey!!, <@${message.author.id}> **El Sistema de AntiLinks esta activado.**\nNo esta permitido enviar Links aqui.\nHas sido aislado temporalmente por **10** minutos.`)
    .setThumbnail(client.user.displayAvatarURL())
    message.channel.send({ embeds : [E] })
  }
}
    })
}