const { MessageEmbed} = require('discord.js')
const lyricsFinder = require('lyrics-finder')


module.exports = {
  name: "lyrics",
  aliases: [""],
  category: "info",
  description: "sends you the songs lyrics you want",
  run: async function (bot, command, args, message) {
  if (!args[0]) {
      let embed = new MessageEmbed()
      .setColor('RED')
      .setTitle(':x: song title not provided!')
      return message.channel.send(embed)
  }
  let lyrics = await lyricsFinder(args.join(' ')) || "Not Found!";
  let embed = new MessageEmbed()
  .setColor('RANDOM')
  .setDescription(lyrics)
  message.channel.send(embed);
      }
}