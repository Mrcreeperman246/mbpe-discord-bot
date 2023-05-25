const Discord = require("discord.js");

module.exports = {
    name: "8ball",
    description: "8ball!",
    execute(message, args) {
            var eightball = [
                "Fuck ye",
                "Fuck no", 
                "Ye sure, whatever",
                "I don't care",
                "Of course!",
                "No, don't do that",
                "Great idea!",
                "Go away",
                "No",
                "You totally should :D",
                "YES 👀",
                "NO 👀",
                "no, people won't like that",
                "Amazing!",
                "You suck",
                "Die.",
                "I really disagree with you",
                "You are the reason i have suicidal thoughts",
                "I am going to jump off a bridge",
                

                
                


            ]
                const random = eightball[Math.floor(Math.random() * eightball.length)];
             const eightballembed = new Discord.MessageEmbed()
             .setTitle("**:8ball: 8ball :8ball:**")
             .setDescription(random)
             .setColor("RANDOM");
            //message.delete()
             message.channel.send(eightballembed);

            
           
           
            
            
            

    }
}