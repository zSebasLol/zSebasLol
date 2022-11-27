const Alt = require(`${process.cwd()}/Modelos/AntiAlts.js`);
const { EmbedBuilder } = require('discord.js');

module.exports = client => {
    client.on('guildMemberAdd', async member => {
        Alt.findOne({ GuildID: member.guild.id }, async (err, data) => {
            if(!data) return;
            const days = data.Days;
            const option = data.Option;
            const channel = member.guild.channels.cache.get(data.Channel);
            const timeSpan = ms(`${days} Dias`);
            const createdAt = new Date(member.user.createdAt).getTime();
            const difference = Date.now() - createdAt;
            if(difference < timeSpan) {
                member.send('Multi Cuenta Detectada.');
                if(option.toLowerCase() == 'kick') {
                    const id = member.id;
                    await member.kick();
                    const K = new EmbedBuilder()
                    .setTitle('ANTI-ALTS')
                    .setColor(client.color)
                    .setTimestamp()
                    .setDescription(`El Miembro <@${id}>, ha sido expulsado por multi cuenta detectada.\nCuenta creada El: ${createdAt}`);
                    channel.send({ embeds: [K] });
                } else if(option.toLowerCase() === 'ban') {
                    const id = member.id;
                    member.ban();
                    const B = new EmbedBuilder()
                    .setTitle('ANTI-ALTS')
                    .setColor(client.color)
                    .setTimestamp()
                    .setDescription(`El Miembro <@${id}>, ha sido baneado por multi cuenta detectada.\nCuenta creada el: ${createdAt}`)
                    channel.send({ embeds: [B] })
                } else {
                    channel.send({ embeds: 
                        [
                        new EmbedBuilder()
                        .setTitle('ANTI-ALTS')
                        .setDescription(`Nueva multi cuenta detectada.\nCuenta creada el: ${createdAt}`)
                        .setColor(client.color)
                        .setTimestamp()
                        ]
                    })
                }
            }
        })
    })
}