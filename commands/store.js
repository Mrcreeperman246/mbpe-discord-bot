const Discord = require("discord.js");

module.exports = {
    name: "store",
    description: "Returns link of store",
    execute(message, args) {
        const storeEmbed = new Discord.MessageEmbed()
            .setTitle(":point_right: Store :point_left:")
            .setURL("https://minebloxpe.weebly.com/store.html")
            .setDescription('```Visit the store today!```')
            .setColor("RANDOM")
            .setTimestamp();


    

            message.channel.send(storeEmbed);
          
    

            

    }
}