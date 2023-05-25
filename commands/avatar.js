const Discord = require("discord.js");

module.exports = {
    name: "avatar",
    description: "Sends back the profile picture of the specified user",
    execute(message, args) 
    {
        const member = message.mentions.users.first();
        const player = message.guild.member(member);
        if (member) {
            let avatarEmbed = new Discord.MessageEmbed()
              avatarEmbed.setTitle(player.displayName + '\'s Avatar')
              avatarEmbed.setColor('RANDOM') 
              avatarEmbed.setImage(player.user.displayAvatarURL())
              avatarEmbed.setURL(player.user.displayAvatarURL())
              message.channel.send(avatarEmbed)
        
        }
    }
}