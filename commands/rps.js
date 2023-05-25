const Discord = require("discord.js");

module.exports = {
    name: "rps",
    description: "rock paper scissors",
    execute(message, args) {
        var chance = Math.floor(Math.random() * 3);

        if(chance === 1) {
            const rockEmbed = new Discord.MessageEmbed()
            .setImage('https://imgur.com/Shxt0E4.png')
            .setColor('#4a28d7')
            message.channel.send(rockEmbed)

        } else if(chance === 0) {
            const paperEmbed = new Discord.MessageEmbed()
            .setImage('https://imgur.com/NG63dZ8.png')
            .setColor('#16e939')
            message.channel.send(paperEmbed)


        } else if(chance === 2) {
            const scissorsEmbed = new Discord.MessageEmbed()
            .setImage('https://imgur.com/beSyQo8.png')
            .setColor('#d3c42c')
            message.channel.send(scissorsEmbed)

        } else {
            message.channel.send("err");
        }

    }
}