const Discord = require("discord.js");

module.exports = {
    name: "nuke",
    description: "nuke command",
    execute(message, args) {
        var chance = Math.floor(Math.random() * 3);

        if(chance === 1) {
            const nuke1Embed = new Discord.MessageEmbed()
            .setImage('https://media.giphy.com/media/HhTXt43pk1I1W/giphy.gif')
            .setColor('#4a28d7')
            message.channel.send(nuke1Embed)

        } else if(chance === 0) {
            const nuke2Embed = new Discord.MessageEmbed()
            .setImage('https://media.giphy.com/media/3o7abwbzKeaRksvVaE/giphy.gif')
            .setColor('#16e939')
            message.channel.send(nuke2Embed)


        } else if(chance === 2) {
            const nuke3Embed = new Discord.MessageEmbed()
            .setImage('https://media.giphy.com/media/OMPqWQVhND9Vm/giphy.gif')
            .setColor('#d3c42c')
            message.channel.send(nuke3Embed)

        } else {
            message.channel.send("err");
        }

    }
}