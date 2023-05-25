const Discord = require("discord.js");

module.exports = {
    name: "ping",
    description: "Returns bot or client Latency",
    execute(message, args, bot) {
        const pingEmbed = new Discord.MessageEmbed()
            .addField('⏳ MBPE Status', `Latency is ${Math.round(bot.ws.ping)}ms.`, true)
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor("RANDOM")
            
            

            message.channel.send(pingEmbed);
           
            

    }
}