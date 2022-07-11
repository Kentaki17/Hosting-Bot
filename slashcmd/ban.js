const { SlashCommandBuilder } = require("@discordjs/builders"); // Builder para el slash command
const { MessageEmbed } = require('discord.js'); // Constructor del messageEmbed.



const data = new SlashCommandBuilder() 
.setName("ban") // Seteamos name del command
.setDescription("Banea a un usuario.") // Description del comando.
.addUserOption(option => // Opcion para mencionar el usuario.
  option
    .setName('usuario') // Seteamos name.
    .setDescription('Usuario al que quieres banear') // Descripcion
    .setRequired(true) // No va a ser requerida obligatoriamente.
)

.addStringOption(option => // Opcion para mencionar el usuario.
option
  .setName('motivo') // Seteamos name.
  .setDescription('Motivo del baneo') // Descripcion
  .setRequired(true) // No va a ser requerida obligatoriamente.)
);
module.exports = { // Exportamos.
  name: "ban", // Nombre del comando.
  run: async (client, interaction) => {
    const user = interaction.options.getUser('usuario') || interaction.user;  
    const motivo = interaction.options.getString('motivo');
    if(!interaction.member.permissions.has("BAN_MEMBERS")) return interaction.reply({content: `No tienes permisos suficientes para utilizar este comando.`, ephemeral: true});
    await 
    interaction.reply({ embeds: [ // Mandamos el mensaje, y de paso el embed.
        new MessageEmbed()
        .setTitle(`Sistema de beneos RealGTA`) // Menciona el tag del usuario del que saco el avatar
        .setDescription(`El usuario ${user} acaba de ser baneado por el siguiente motivo: ${motivo}.`)
        .setThumbnail(user.displayAvatarURL({ dynamic: true}))
        .setColor('BLUE') // Color verde
        .setTimestamp() // Timestamp en que se uso el cmd.
        .setFooter({ text: `Sanción aplicada por: ${interaction.user.tag}`, iconURL: `${interaction.user.displayAvatarURL({ dynamic: true })}`}) // Fuiter informando quien lo solicitó y el avatar del que lo solicitó.
      ]
    });
    await interaction.guild.members.ban(user, {reason: motivo})
  }, data
};