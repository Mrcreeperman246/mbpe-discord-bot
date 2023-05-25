const Discord = require("discord.js");

module.exports = {
    name: "rules",
    description: "Returns the rules of the discord server",
    execute(message, args) {
        const ruleEmbed = new Discord.MessageEmbed()
        .setAuthor("Discord Server Rules")
        .setTitle("Note these rules only apply to the MineBloxPE discord server")
        .setURL("https://discord.com/invite/gGCqUGS")
        .setDescription("Check below for the rules of MineBloxPE\n ")
        .setColor("RANDOM")
        .addField('1)', 'Besides following the rules of the server, the discord terms of service and guidelines should be followed.', true)
        .addField('2)', 'Discord names and profiles pictures should be appropriate, any pictures containing pornography or graphic images will be asked to be changed', true)
        .addField('3)', 'Please be respectful to the staff and members, Joking is fine but please avoid harassing, bullying, or hate speech towards other members', true)
        .addField('4)', 'Any NSFW content is not wanted in the server. If you wish to participate in things like this, please us Direct Messages', true)
        .addField('5)', 'Spamming of any form is not allowed. Spamming anywhere besides #🤖》bot-commands  is not allowed and will result in a 10 minute mute', true)
        .addField('6)', 'Controversial topics are not wanted in the serverTopics such as religion, war, politics, and race are not allowed', true)
        .addField('7)', 'Racial Slurs. Any kind of racial slur or insult will result in a 5 minute mute', true)
        .addField('8)', 'Posting server invite links or unwanted links. If you are sending links, make sure to send them in #🔗》links and follow the guidelines in the channel', true)
        .addField('9)', 'No advertising in the server without permission. Sharing links to other discord servers will result in a mute unless you was given permission', true)
        .setTimestamp();


    

            message.channel.send(ruleEmbed);
        
            
          
    

            

    }
}