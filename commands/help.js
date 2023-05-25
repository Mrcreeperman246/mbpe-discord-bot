const Discord = require("discord.js");

module.exports = {
    name: "help",
    description: "Returns help menu",
    execute(message, args) {
        const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Click here for help!')
            .setDescription('Note: The link takes you to the currect commands website')
            .setURL('https://creeperdev.gitbook.io/mbpe-bot/')
            .setColor("0xb4e012")
            


            message.channel.send(helpEmbed);
    

            

    }
}