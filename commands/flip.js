const Discord = require("discord.js");

module.exports = {
    name: "flip",
    description: "Flips a coin",
    execute(message, args) {
        var chance = Math.floor(Math.random() * 2);

        if(chance === 1) {
            const headEmbed = new Discord.MessageEmbed()
            .setDescription("**My answer is: Yes**")
            .setColor("RANDOM")
            


            message.channel.send(headEmbed);

        } else if(chance === 0) {
            const tailEmbed = new Discord.MessageEmbed()
            .setDescription("**My answer is: No**")
            .setColor("RANDOM")
            
    
            message.channel.send(tailEmbed);        

        } else {
            message.channel.send("err");
        }

    }
}