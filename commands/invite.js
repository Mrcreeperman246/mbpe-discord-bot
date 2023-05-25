const Discord = require("discord.js");

module.exports = {
    name: "invite",
    description: "It invites bot to server",
    execute(message, args)
    {
        const invitelinkEmbed = new Discord.MessageEmbed()
            .setTitle(":point_right: invite the bot to your server :point_left:")
            .setURL("https://discord.com/oauth2/authorize?client_id=724010383672868886&permissions=8&scope=bot")
            .setColor("RANDOM")



            message.channel.send(invitelinkEmbed);
       
    

            

    }
}