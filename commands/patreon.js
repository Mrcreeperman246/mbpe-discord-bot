const Discord = require("discord.js");

module.exports = {
    name: "patreon",
    description: "Returns link of patreon",
    execute(message, args) {
        const patreonEmbed = new Discord.MessageEmbed()
            .setTitle(":point_right: Patreon Page :point_left:")
            .setURL("https://patreon.com/MineBloxPE")
            .setDescription('```Visit the patreon page```')
            .setColor("RANDOM")
            .setTimestamp();


    

            message.channel.send(patreonEmbed);
          
    

            

    }
}