const Discord = require('discord.js');

module.exports = {
    name: "servericon",
    aliases: [],

    run: async (client, message, args) => {

        const svicon = new Discord.EmbedBuilder()
            .setAuthor({ name: "Icono:", iconURL: message.guild.iconURL({ dynamic: true }) })
            .setImage(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))
            .setColor(client.color)
            .setFooter({ text: `Pedido por: ${message.author.tag}`, iconURL: message.author.displayAvatarURL({ dynamic: true }) })
            .setTimestamp()

            const servericon = new Discord.ActionRowBuilder().addComponents()
                
                    new Discord.ButtonBuilder().setStyle(ButtonStyle.Link).setEmoji("⚙").setLabel("Server-Icono").setURL(message.guild.iconURL({ format: 'png', dynamic: true, size: 1024 }))

        message.channel.send({ embeds: [svicon],content: `**__Icono del servidor__ ( \`${message.guild.name}\` )**`})
    }
    
}