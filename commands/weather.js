const Discord = require("discord.js");

module.exports = {
    name: "weather",
    description: "weather command",
    execute(message, args) {
        const weatherEmbed = new Discord.MessageEmbed()
            .setTitle("Weather")
            .setDescription('Coming soon')
            .setColor("RANDOM")
            .setTimestamp();


        

            message.channel.send(weatherEmbed);
            
    

            

    }
}