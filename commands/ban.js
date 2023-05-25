const Discord = require("discord.js");
module.exports = {
    name: "ban",
    description: "ban command updated",
    execute(message, args)
    {
        const {
            member,
            mentions
        } = message
        
        const tag = `<@${member.id}>`

        console.log('ban is working')

        if(
            member.hasPermission('ADMINISTRATOR') ||
            member.hasPermission('BAN_MEMBERS')
        )
        {
            const target = mentions.users.first()
            if(target)
            {
                const targetMember = message.guild.members.cache.get(target.id)
                targetMember.ban()
                const ban1Embed = new Discord.MessageEmbed()
                .setTitle("Action: Ban")
                .setDescription(`Banned ${target} (User ID: ${target.id})`)
                .setColor("#80d629")
                .setFooter(`Banned by ${message.author.username}\n \nPlease note that this bot cannot ban bots or users with higher permissions than itself`);
                console.log(message.author.username, "banned", target) 
                message.channel.send(ban1Embed)
            }
            else
            {
                const ban2Embed = new Discord.MessageEmbed()
            .setTitle("Error when executing command")
            .setColor("#fd0902")
            .setFooter("Note: if you don't ping the user, they won't be banned!")
            .setDescription(`**Oops! this member cannot be banned! try one of the following:**\n **1:** ping the user you want to ban\n **2:** check if they have a role higher than the bot\n **3:** check if they have administrator in the server \n \n If this doesn't help, contact the bot developer`);
            message.channel.send(ban2Embed)
            }
        }
        else
        {
            const ban3Embed = new Discord.MessageEmbed()
            .setColor("#ff2050")
            .setDescription("Missing permissions:\n**ADMINISTRATOR**\n **BAN_MEMBERS**")
            .setFooter("Oops! only moderators are able to use this command!")
            message.channel.send(ban3Embed)
        }
    }
}