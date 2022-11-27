const Discord = require('discord.js');
const config = require('./config/config.json')
const { prefix } = require('./config/config.json')
const { ActivityType } = require('discord.js')
const fs = require('fs');
require('colors')
const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.GuildVoiceStates,
        Discord.GatewayIntentBits.GuildMessageReactions,
        Discord.GatewayIntentBits.GuildEmojisAndStickers,
    ],
    partials: [Discord.Partials.User, Discord.Partials.Channel, Discord.Partials.GuildMember, Discord.Partials.Message, Discord.Partials.Reaction]

})

client.on(`ready`, async (ready) => {
    const array = [
        {
          name: `${prefix}help | dsc.gg/dakison`,
          type: ActivityType.Listening //tu type
        },
        {
          name: `${client.guilds.cache.size} Servidores | ${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0)} Members`,
          type: ActivityType.Competing //tu type
        },
       {
         name: `Owner: ! zSnxb_#0001`,
         type: ActivityType.Streaming, //tu type
         url: "https://www.twitch.tv/sebas909865"
       }
       ]
       setInterval(() => {
          function presence(){
              client.user.setPresence({
                status: "online",
                activities: [array[Math.floor(Math.random() * array.length)]],
          });
        }
        presence();
      }, 5000);
   });


client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.color = config.color;

/* SISTEMA DE IDIOMAS */
client.la = {};
let idiomas = fs.readdirSync('./idiomas').filter(archivo => archivo.endsWith(".json")).map(idioma => idioma.replace(/.json/, ""));
for(const idioma of idiomas){
    client.la[idioma] = require(`./idiomas/${idioma}`)
}
Object.freeze(client.la);

//Cargamos los handlers
fs.readdirSync('./handlers').forEach(handler => {
    try {
        require(`./handlers/${handler}`)(client, Discord);
    } catch (e) {
        console.log(`ERROR EN EL HANDLER ${handler}`.red)
        console.log(e)
    }
});

client.login(config.token).catch(() => console.log(`-[X]- NO HAS ESPECIFICADO UN TOKEN VALIDO O TE FALTAN INTENTOS -[X]-\n [-] ACTIVA LOS INTENTOS EN https://discord.dev [-]`.red))

/*
╔═════════════════════════════════════════════════════╗
║    || - || Desarrollado por dewstouh#1088 || - ||   ║
║    ----------| discord.gg/MBPsvcphGf |----------    ║
╚═════════════════════════════════════════════════════╝
*/
