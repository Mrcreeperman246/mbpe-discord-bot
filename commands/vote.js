const Discord = require("discord.js");

module.exports = {
    name: "vote",
    description: "Returns link of voting website",
    execute(message, args) {
        const voteEmbed = new Discord.MessageEmbed()                         
            .setTitle(":point_right: Voting link! :point_left:")
            .setURL("https://bit.ly/MineBloxPE")
            .setDescription('```Vote today to receive the following rewards:```')
            .setColor("RANDOM")
            .addField('Reward 1:', '```x10 diamonds```', true)
            .addField('Reward 2:', '```$25,000```', true)
            .addField('Reward 3:', '```Voter Rank```', true)
            .setTimestamp();




            message.channel.send(voteEmbed);
      

            

    }
}