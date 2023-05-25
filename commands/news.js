const Discord = require("discord.js");

module.exports = {
    name: "news",
    description: "Returns changelog info",
    execute(message, args) {
        const newsEmbed = new Discord.MessageEmbed()
            .setTitle("```Discord Bot News:```")
            .setURL("https://minebloxpe.forumotion.com/t1-minebloxpe-update")
            .setDescription("Sourcecode will be released on >docs soon.")
            .setColor("RANDOM")
            .setTimestamp();


            message.channel.send(newsEmbed);
    

            

    }
}