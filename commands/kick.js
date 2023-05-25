const Discord = require("discord.js");
module.exports = {
    name: "kick",
    description: "kick command updated",
    execute(message, args)
    {
        const {
            member,
            mentions
        } = message
        
        const tag = `<@${member.id}>`

        console.log('kick is working')

        if(
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('KICK_MEMBERS')
        )
        {
            const target = mentions.users.first()
            if(target)
            {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.kick()
                const kickv20Embed = new Discord.MessageEmbed()
                .setTitle("Action: Kick")
                .setDescription(`kicked ${target} (User ID: ${target.id})`)
                .setColor("#80d629")
                .setFooter(`kicked by ${message.author.username}\n \nPlease note that this bot cannot kick bots or users with higher permissions than itself`);
                console.log(message.author.username, "kicked", target) 
                message.channel.send(kickv20Embed)
            }
            else
            {
                const kickv21Embed = new Discord.MessageEmbed()
            .setTitle("Error when executing command")
            .setColor("#fd0902")
            .setFooter("Note: if you don't ping the user, they won't be kicked!")
            .setDescription(`**Oops! this member cannot be kicked! try one of the following:**\n **1:** ping the user you want to kick\n **2:** check if they have a role higher than the bot\n **3:** check if they have administrator in the server \n \n If this doesn't help, contact the bot developer`);
            message.channel.send(kickv21Embed)
            }
        }
        else
        {
            const kickv22Embed = new Discord.MessageEmbed()
            .setColor("#ff2050")
            .setDescription("Missing permissions:\n**ADMINISTRATOR**\n **KICK_MEMBERS**")
            .setFooter("Oops! only moderators are able to use this command!")
            message.channel.send(kickv22Embed)
        }
    }
}