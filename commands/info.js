const Discord = require("discord.js");

module.exports = {
    name: "info",
    description: "Bot info command",
    execute(message, args, bot)
    {
        const infoEmbed = new Discord.MessageEmbed()
            .setTitle('MBPE Bot Stats')
            .setThumbnail(bot.user.displayAvatarURL())
            .setColor('#5e26d9')
            .addField('🌐 Servers', `${bot.guilds.cache.size} servers.`, true)
            .addField('📺 Channels', `${bot.channels.cache.size} channels.`, true)
            .addField('👥 Server Users', `${bot.users.cache.size}`, true)
            .addField('⏳ Ping', `${Math.round(bot.ws.ping)}ms`, true)
            .setFooter(`Created By: Boy Creeper#9147`)



            message.channel.send(infoEmbed);

        




    }
}