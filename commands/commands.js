const Discord = require("discord.js");

module.exports = {
    name: "commands",
    description: "Returns list of commands",
    execute(message, args) {
        const commandsEmbed = new Discord.MessageEmbed()
            .setAuthor("MBPE Bot Commands!")
            .setTitle("These commands include: discord commands, minecraft commands and moderation commands")
            .setDescription("Key:\n [🔴] = Discord Commands\n [🟡] = Minecraft Commands\n [🟠] = Moderation Commands\n Prefix: >\n \n")
            .setColor("RANDOM")
            .addField('[🔴]  🙃>flip', '```Flips a coin```', true)
            .addField('[🔴]  ℹ️ >serverinfo', '```related discord information```', true)
            .addField('[🔴]  🙊 >say', '```repeats your message```', true)
            .addField('[🔴]  💬 >spam', '```spams chat```', true)
            .addField('[🔴]  👋 >invite', '```invites bot```', true)
            .addField('[🔴]  ℹ️ >info', '```project information```', true)
            .addField('[🔴]  🎉 >patreon', '```Patreon Command```', true)
            .addField('[🔴]  📏 >rules', '```Rules for the server```', true)
            .addField('[🔴]  🔗 >linkrules', '```Link Rules```', true)
            .addField('[🔴]  👦 >avatar', '```fetches pinged users avatar```', true)
            .addField('[🔴]  🏓 >ping', '```check the current latency```', true)
            .addField('[🔴]  🎮 >rps', '```rock paper scissors game```', true)
            .addField('[🔴]  🎱 >8ball', '```8ball command```', true)
            .addField('[🟡]  🌐 >website', '```links to website```', true)
            .addField('[🟡]  💻 >server', '```Minecraft bedrock server IP```', true)
            .addField('[🟡]  💰 >store', '```links to the server store```', true)
            .addField('[🟡]  🖥️ >games', '```Minecraft minigames list```', true)
            .addField('[🟡]  🗞️ >news', '```Recent news```', true)
            .addField('[🟡]  🗳️ >vote', '```links to voting website```', true)
            .addField('[🟠]  🆑 >clear', '```clears specified messages```', true)
            .addField('[🟠]  🦶🏽 >kick', '```kicks specified user```', true)
            .addField('[🟠]  🚫 >ban', '```bans specified user```', true)
            .setFooter("Commands are updated regularly!")
            .setTimestamp();

        


            
            message.channel.send(commandsEmbed);
            
            
          
    

            

    }
}