const Discord = require("discord.js");

module.exports = {
    name: "rpsmenu",
    description: "rock paper scissors menu",
    execute(message, args) {
        const rpsmenuEmbed = new Discord.MessageEmbed()
            .setTitle('Rock Paper Scissors Menu')
            .setDescription("Welcome to rock paper scissors!\n")
            .addField('🤘📰✂', '```>rps```', true)
            .setColor("0xb4e012")
            .setTimestamp();


            message.channel.send(rpsmenuEmbed);
    

            

    }
}