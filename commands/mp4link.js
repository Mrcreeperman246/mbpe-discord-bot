const Discord = require("discord.js");

module.exports = {
    name: "mp4link",
    description: "mp4link thing",
    execute(message, args) {
        var chance = Math.floor(Math.random() * 3);

        if(chance === 1) {
            const mp41Embed = new Discord.MessageEmbed()
            .setTitle('Click Here to view the video in your browser')
            .setURL('https://youtu.be/heTzUg_eIes')
            .setDescription('This will redirect you to a youtube video\n in your web browser')
            .setColor('#4a28d7')
            message.channel.send(mp41Embed)

        } else if(chance === 0) {
            const mp42Embed = new Discord.MessageEmbed()
            .setTitle('Click Here to view the video in your browser')
            .setURL('https://www.youtube.com/watch?v=MLhvg7eyJa0&ab_channel=SuperJoJo-NurseryRhymes')
            .setDescription('This will redirect you to a youtube video\n in your web browser')
            .setColor('#16e939')
            message.channel.send(mp42Embed)


        } else if(chance === 2) {
            const mp43Embed = new Discord.MessageEmbed()
            .setTitle('Click Here to view the video in your browser')
            .setURL('https://www.youtube.com/watch?v=ywMgj3DFrKI&ab_channel=ComePlayWithMe')
            .setDescription('This will redirect you to a youtube video\n in your web browser')
            .setColor('#d3c42c')
            message.channel.send(mp43Embed)

        } else {
            message.channel.send("err");
        }

    }
}