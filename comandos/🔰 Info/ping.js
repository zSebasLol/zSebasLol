const Discord = require('discord.js');


module.exports = {
    name: "ping",
    aliases: ["ms"],
    desc: "Sirve para ver la lactencia del bot",
    run: async (client, message, args, prefix) => {
let values = {
    "high": 200,
    "medium": 100,
    "low": 50
}

let ping = Date.now() - message.createdTimestamp

let color;
  if (ping > values.high) {
    color = '🔴'
} else if (ping > values.medium) {
    color = '🟡'
} else {
    color = '🟢'
}

let colores;
  if (ping > values.high) {
    colores = 'df0101'
} else if (ping > values.medium) {
    colores = 'df7401'
} else {
    colores = '01df01'
}

let embed = new EmbedBuilder()
.setColor(colores)
.setTitle(`Ping ${client.user.username}\n`)
  .addField("**❯ Ping | :**",`> ${color} \`|\` Mi ping es \`${ping}\`ms\n`)  
  .addField("**❯ API | :**",`> 🛰️ \`|\` Ping DiscordAPI: \`${client.ws.ping}\` ms`)
.setColor(client.color)
.setTimestamp()

message.reply({embeds: [embed]})

    }
}

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
