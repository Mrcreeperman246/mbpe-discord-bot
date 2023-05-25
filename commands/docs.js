const Discord = require("discord.js");

module.exports = {
    name: "docs",
    description: "Returns documentation",
    execute(message, args) {
        const docsEmbed = new Discord.MessageEmbed()
            .setTitle("Bot Documentation")
            .setURL("https://mineblox.gitbook.io/mbpe-bot/")
            .setDescription("This is a public page which details the bots commands and how to work them! (source code coming soon).")
            .setColor("RANDOM")


            message.channel.send(docsEmbed);
    

            

    }
}