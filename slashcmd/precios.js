const { SlashCommandBuilder } = require("@discordjs/builders")
const { Client, Message, MessageEmbed,  MessageActionRow, MessageSelectMenu  } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("precios")
    .setDescription("Mira los precios de nuestros productos."),
    
    async run(client, interaction, language){
            const row = new MessageActionRow()
            .addComponents(
                new MessageSelectMenu()
                    .setCustomId('moderation')
                    .setPlaceholder('🚀 | Seleccione una opción')
                    .addOptions([
                        {
                            label: '⚙️ | GameServer',
                            description: 'Mira todos los Gameservers disponibles.',
                            value: 'game'
                        },
                        {
                            label: '🔗 | VPS',
                            description: 'Mira todas las VPS disponibles.',
                            value: 'vps'
                        },
                        {
                            label: '📻 | TS3',
                            description: 'Mira todos los servidores de ts3 disponibles.',
                            value: 'ts3'
                        },
                        {
                            label: '🤖 | Discord Hosting',
                            description: 'Mira todos los discord hosting disponibles.',
                            value: 'ds'
                        },
                        {
                            label: '📑 | Servidores dedicados',
                            description: 'Mira todos los servidores dedicados disponibles.',
                            value: 'dedi'
                        }
                    ])
            )

        const embed = new MessageEmbed()
            .setTitle(`<:kent:993161413927370792> Kentaki`)
            .setFields([
                { name: `Guia de uso:`, value: `Haz clic en el menú y selecciona el apartado que quieres ver.ㅤㅤ\n [Soporte](https://discord.gg/EpvTeQxBJ2)` }
            ])
            .setThumbnail(interaction.user.displayAvatarURL())
            .setColor('ORANGE')
            .setFooter('Kentaki', 'https://cdn.discordapp.com/attachments/990724062189871154/993161659197698189/Nuevo_proyecto.png')

        interaction.reply({ embeds: [embed], components: [row], ephemeral:true }).then(() => {
            const collector = interaction.channel.createMessageComponentCollector({ componentType: 'SELECT_MENU', time: 1000 * 60 * 60 * 60 })

            collector.on('collect', async i => {
                    switch (i.values[0]) {
                        case 'game':
                            const gameEmbed = new MessageEmbed()
                                .setTitle(`<:kent:993161413927370792> Gameservers`)
                                .setFields([
                                    { name: `Gameservers Gama Baja`, value: `-------------------------------------` },
                                    { name: `Game-1:`, value: `Intel Xeon D-1540 - 4GB RAM - 15 GB SSD -> **9.99€**` },
                                    { name: `Game-2:`, value: `Intel Xeon D-1540 - 6GB RAM - 25 GB SSD -> **16.99€**` },
                                    { name: `Game-3:`, value: `Intel Xeon D-1540 - 8GB RAM - 50 GB SSD -> **23.99€**` },
                                    { name: `Gameservers Gama Alta`, value: `-------------------------------------` },
                                    { name: `Game-4:`, value: `Intel Xeon D-1540 - 12GB RAM - 75 GB SSD -> **28.99€**` },
                                    { name: `Game-5:`, value: `Intel Xeon D-1540 - 16GB RAM - 85 GB SSD -> **32.99€**` },
                                    { name: `Game-6:`, value: `Intel Xeon D-1540 - 26GB RAM - 100 GB SSD -> **39.99€**` }
                                ])
                                .setColor('BLUE')
                                .setFooter('Todos nuestros servicios cuentan con Anti-DDOS', 'https://cdn.discordapp.com/attachments/990724062189871154/993161659197698189/Nuevo_proyecto.png')
                            i.reply({ embeds: [gameEmbed], ephemeral: true })
                            break
                        case 'vps':
                            const vpsEmbed = new MessageEmbed()
                                .setTitle(`<:kent:993161413927370792> VPS`)
                                .setFields([
                                    { name: `VPS-1:`, value: `AMD EPYC 7371 - 4GB RAM - 50 GB SSD -> **7.99€**` },
                                    { name: `VPS-2:`, value: `AMD EPYC 7371 - 6GB RAM - 75 GB SSD -> **9.99€**` },
                                    { name: `VPS-3:`, value: `AMD EPYC 7371 - 8GB RAM - 90 GB SSD -> **14.99€**` }
                                ])
                                .setFooter('Todos nuestros servicios cuentan con Anti-DDOS', 'https://cdn.discordapp.com/attachments/990724062189871154/993161659197698189/Nuevo_proyecto.png')
                                .setColor('GREEN')
                                i.reply({ embeds: [vpsEmbed], ephemeral: true })
                            break
                        case 'ts3':
                            const ts3Embed = new MessageEmbed()
                                .setTitle(`<:kent:993161413927370792> Servidores TS3`)
                                .setFields([
                                    { name: `Basico:`, value: `64 Slots - Trafico Ilimitado - 2GB RAM -> **2.99€**` },
                                    { name: `Avanzado:`, value: `150 Slots - Trafico Ilimitado - 5GB RAM -> **4.99€**` }
                                ])
                                .setFooter('Todos nuestros servicios cuentan con Anti-DDOS', 'https://cdn.discordapp.com/attachments/990724062189871154/993161659197698189/Nuevo_proyecto.png')
                                .setColor('RED')
                                i.reply({ embeds: [ts3Embed], ephemeral: true })
                            break
                        case 'ds':
                            const dsEmbed = new MessageEmbed()
                                .setTitle(`<:kent:993161413927370792> Discord Hosting`)
                                .setFields([
                                    { name: `Discord JS:`, value: `Xeon-E 2136 - 512MB RAM - 2.5 GB SSD - 2 Backups & Databases -> **1.99€**` },
                                    { name: `Discord PY:`, value: `Xeon-E 2136 - 1GB RAM - 3.5 GB SSD - 3 Backups & Databases -> **3.99€**` }
                                ])
                                .setFooter('Todos nuestros servicios cuentan con Anti-DDOS', 'https://cdn.discordapp.com/attachments/990724062189871154/993161659197698189/Nuevo_proyecto.png')
                                .setColor('WHITE')
                                i.reply({ embeds: [dsEmbed], ephemeral: true })
                            break
                        case 'dedi':
                            const dediEmbed = new MessageEmbed()
                                .setTitle(`<:kent:993161413927370792> Servidores dedicados`)
                                .setFields([
                                    { name: `Dedi-1:`, value: `Intel Xeon E-2136 - 64GB RAM - 1 TB Almacenamiento - Windows OS incluido - Limite de 14 direcciones IP -> **90€**` },
                                    { name: `Dedi-2:`, value: `Intel Xeon E-2136 - 128GB RAM - 1 TB Almacenamiento - Windows OS incluido - Sin limite de direcciones IP -> **110€**` },
                                    { name: `Dedi-3:`, value: `Intel Xeon E-2136 - 150GB RAM - 2 TB Almacenamiento - Windows OS incluido - Sin limite de direcciones IP -> **150€**` },
                                    { name: `Precio instalación:`, value: `La instalación de todos los servidores dedicados cuestan X` }
                                ])
                                .setFooter('Todos nuestros servicios cuentan con Anti-DDOS', 'https://cdn.discordapp.com/attachments/990724062189871154/993161659197698189/Nuevo_proyecto.png')
                                .setColor('BLACK')
                                i.reply({ embeds: [dediEmbed], ephemeral: true })
                            break
                    }
            })
        })
    }
}