const Discord = require("discord.js");

module.exports = {
    name: "serverinfo",
    description: "serverinfo",
    execute(message, args, bot) {
        const serverinfoEmbed = new Discord.MessageEmbed()
            .setTitle("Discord Server Information")
            .setColor("RANDOM")
            .setThumbnail(message.guild.iconURL())
            .setAuthor(`${message.guild.name} Info`, message.guild.iconURL)
            .addField("Guild Name:", `${message.guild.name}`, true)
            .addField("Guild Owner:", `${message.guild.owner}`, true)
            .addField("Member count:", `${message.guild.memberCount}`, true)
            .setFooter('MBPE | Discord Server Info', bot.user.displayAvatarURL);


            message.channel.send(serverinfoEmbed)
    

    }     

    }
