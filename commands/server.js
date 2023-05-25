const Discord = require("discord.js");

module.exports = {
    name: "server",
    description: "Returns IP of the server",
    execute(message, args) {
        const serverEmbed = new Discord.MessageEmbed()
            .setTitle("Server IP and port")
            .setDescription("MineBlox Server details")
            .addField("```IP: a44910.leet.cc```", "```Port: 44910```")
            .addField("```IP: MineBloxPE.pocket.pe```", "```Port: 44910```")
            .setColor("RANDOM")
            .setTimestamp();


            message.channel.send(serverEmbed);
            
    

            

    }
}