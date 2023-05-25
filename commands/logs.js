const Discord = require("discord.js");

module.exports = {
    name: "logs",
    description: "log output command",
    execute(message, args) {
        const logoutputEmbed = new Discord.MessageEmbed()
        .setTitle("**Bot Logs**")
        .setURL("https://www.protectedtext.com/MBPElogs")
        .setDescription("This is a protected page and will require a password to unlock it.")
        .setColor("RANDOM")

            message.channel.send(logoutputEmbed);


            



            
            
           
           
            
            

    }
}
