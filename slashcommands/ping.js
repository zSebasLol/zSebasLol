const { SlashCommandBuilder } = require("discord.js")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Sirve para ver la lactencia del bot'),
	async execute(interaction, client) {
		 interaction.channel.send(`Pong! Mi ping es \`${client.ws.ping}\``);
	},
};