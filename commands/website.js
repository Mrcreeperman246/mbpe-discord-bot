const Discord = require("discord.js");

module.exports = {
    name: "website",
    description: "Returns link of website",
    execute(message, args) {
        const websiteEmbed = new Discord.MessageEmbed()
            .setTitle(":point_right: Website :point_left:")
            .setURL("http://minebloxpe.com/")
            .setColor("RANDOM")
            .setTimestamp();


        

            message.channel.send(websiteEmbed);
            
    

            

    }
}