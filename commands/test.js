const Discord = require("discord.js");

module.exports = {
    name: "test",
    description: "test command",
    execute(message, args) {
        const testEmbed = new Discord.MessageEmbed()
        .setTitle('test')
        .setColor("RANDOM")

            message.channel.send(testEmbed);
            
            


            



            
            
           
           
            
            

    }
}





