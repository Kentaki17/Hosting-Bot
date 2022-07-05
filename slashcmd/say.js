const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("say")
    .setDescription("El bot dirá el mensaje que quieras.")
    .addStringOption(option => option.setName("texto").setDescription("Lo que quieras mandar.").setRequired(true)),
    
    async run(client, interaction){

        const mensaje = interaction.options.getString("texto")
        if (!interaction.member.permissions.has('ADMINISTRATOR')) return interaction.reply({ content: 'No tienes permisos suficientes para ejecutar este comando.', ephemeral: true})
        await interaction.deferReply()

        setTimeout(() => {
        interaction.editReply({ content: `${mensaje}`})
    }, 2000)
    }
}