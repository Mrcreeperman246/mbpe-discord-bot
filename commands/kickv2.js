const Discord = require("discord.js");

module.exports = {
    name: "kickv2",
    description: "kick v2 command",
    execute(message, args) {
        const kicckEmbed = new Discord.MessageEmbed()
        .setTitle("**Wrong command**")
        .setDescription("do >kick to use this feature")
        .setColor("RANDOM")

            message.channel.send(kicckEmbed);


            



            
            
           
           
            
            

    }
}
