const Discord = require("discord.js");
const intents = new Discord.Intents();
const { join } = require('path')
const client = new Discord.Client({ intents: 32767})
const { Client, MessageEmbed, Collection, Guild, Intents } = require('discord.js');



client.on("ready", () => {
    console.log("Bot listo!")
})



client.on('ready', () => {
    client.user.setActivity({
      name: `Kentaki.`,
      type: 'PLAYING'
    });
});
require("dotenv").config();
const keepAlive = require("./server.js");


const fs = require("fs");
let { readdirSync } = require("fs");


client.slashcommands = new Discord.Collection();
const slashcommandsFiles = fs.readdirSync("./slashcmd").filter(file => file.endsWith(".js"))

for(const file of slashcommandsFiles){
    const slash = require(`./slashcmd/${file}`)
    console.log(`Slash commands - ${file} Cargado.`)
    client.slashcommands.set(slash.data.name, slash)
}

client.on("interactionCreate", async(interaction) => {

    if(interaction.isCommand() || interaction.isContextMenu()){

        let user = interaction.guild.members.fetch(interaction.memberId)
        const slashcmds = client.slashcommands.get(interaction.commandName)

        if(!slashcmds) return;
    
        try{
            await slashcmds.run(client, interaction)
        } catch(e){
            console.error(e)
        }
    }

})




client.login("") //TU TOKEN AQUÍ