const Discord = require("discord.js");

module.exports = {
    name: "unban",
    description: "unban command",
    execute(message, args) {
        const unbanEmbed = new Discord.MessageEmbed()
        .setTitle("Error")
        .setDescription("You encountered an error.")
        .setColor("RANDOM")

            message.channel.send(unbanEmbed);


            



            
            
           
           
            
            

    }
}
