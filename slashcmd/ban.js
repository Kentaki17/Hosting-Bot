const { SlashCommandBuilder } = require("@discordjs/builders");
const { MessageEmbed } = require('discord.js');



const data = new SlashCommandBuilder() 
.setName("ban")
.setDescription("Banea a un usuario.")
.addUserOption(option =>
  option
    .setName('usuario') 
    .setDescription('Usuario al que quieres banear')
    .setRequired(true)
)

.addStringOption(option => 
option
  .setName('motivo')
  .setDescription('Motivo del baneo')
  .setRequired(true)
);
module.exports = { // Exportamos.
  name: "ban", // Nombre del comando.
  run: async (client, interaction) => {
    const user = interaction.options.getUser('usuario') || interaction.user;  
    const motivo = interaction.options.getString('motivo');
    if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({content: `No tienes permisos suficientes para utilizar este comando.`, ephemeral: true});
    await 
    interaction.reply({ embeds: [
        new MessageEmbed()
        .setTitle(`Sistema de baneos`) 
        .setDescription(`El usuario ${user} acaba de ser baneado por el siguiente motivo: ${motivo}.`)
        .setThumbnail(user.displayAvatarURL({ dynamic: true}))
        .setColor('BLUE')
        .setTimestamp() 
        .setFooter({ text: `Sanción aplicada por: ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true })}`})
      ]
    });
    await interaction.guild.members.ban(user, {reason: motivo})
  }, data
};