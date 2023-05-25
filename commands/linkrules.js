const Discord = require("discord.js");

module.exports = {
    name: "linkrules",
    description: "Returns the link rules of the discord server",
    execute(message, args) {
        const linkrulesEmbed = new Discord.MessageEmbed()
        .setAuthor("Discord Server Link Rules")
        .setTitle("Note these link rules only apply to the MineBloxPE discord server")
        .setColor("RANDOM")
        .setURL("https://discord.com/invite/gGCqUGS")
        .addField('1)', '```Do not send discord links```', true)
        .addField('2)', '```Do not send IP Grabbers```', true)
        .addField('3)', '```Do not send chrome extensions```', true)
        .addField('4)', '```Do not send .exe or any file that can run on the system```', true)
        .addField('5)', '```Do not send link shortners```', true)
        .addField('6)', '```Do not send pornographic links```', true)
        .addField('7)', '```Do not send malicious links to files or content that can hijack devices```', true)
        .setTimestamp();


    

            message.channel.send(linkrulesEmbed);
            
          
    

            

    }
}