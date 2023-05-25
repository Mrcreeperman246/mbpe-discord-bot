const Discord = require("discord.js");

module.exports = {
    name: "games",
    description: "Says information about the server",
    execute(message, args) {
        const gamesEmbed = new Discord.MessageEmbed()
            .setTitle("MineBloxPE Games")
            .setDescription("Look below for gamemodes and when they were released")
            .addField('season 1', '```knockback arena```', true)
            .addField('season 1', '```kitpvp```', true)
            .addField('season 2', '```factions (DELETED)```', true)
            .addField('season 2', '```parkour```', true)
            .addField('season 3', '```1vs1```', true)
            .addField('season 4', '```plots```', true)
            .addField('season 5', '```Mines (BROKEN)```', true)
            .addField('season 6', '```VIP Mine```', true)
            .addField('season 7', '```Droppers```', true)
            .addField('season 11', '```Survival```', true)
            .setColor("RANDOM")
            .setTimestamp();


            message.channel.send(gamesEmbed);
    

            

    }
}