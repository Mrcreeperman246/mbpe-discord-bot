// Bot coded by Mrcreeperman246
// Version 6.3
const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
const keepAlive = require("./server.js");

const fs = require("fs");
const { clear } = require("console");
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(let file of commandFiles) {
    const command = require(`./commands/${file}`);
    bot.commands.set(command.name, command);
}


bot.on("ready", () => {
    console.log(`The bot has successfully connected to discord`);
    console.log(`✅ - online`);
    console.log(`✅ - available`);
    console.log(`✅ - prefix: ">"`);
    console.log(`✅ - Loaded`);
    console.log(`>commands | ${bot.guilds.cache.size} servers | Documentation: https://mineblox.gitbook.io/mbpe-bot/`)
    bot.user.setActivity(`>commands | ${bot.guilds.cache.size} servers`)  //bot status (displays under the bots name on userlist)
});

//(`>commands | ${bot.guilds.cache.size} servers!`)



bot.on("message", message => {

    if(message.author.bot) return;

    let args = message.content.substring(botconfig.prefix.length).split(" ");

    if(message.content.startsWith(botconfig.prefix)) {
        switch(args[0].toLowerCase()) {  //changes >flip command to lowercase if it's uppercase

            case 'flip':
                bot.commands.get('flip').execute(message, args);  //flip command
            break;

            case 'avatar':
                bot.commands.get('avatar').execute(message, args); //avatar command
            break;

            case 'rules':
                bot.commands.get('rules').execute(message, args);  //rules command
            break;

            case 'linkrules':
                bot.commands.get('linkrules').execute(message, args);  //mineblox server rules command
            break;


            case 'website':
                bot.commands.get('website').execute(message, args);  //website command
            break;

            case 'commands':
                bot.commands.get('commands').execute(message, args);  //commands list ouput
            break;

            case 'server':
                bot.commands.get('server').execute(message, args);  //server command
            break;

            case 'help':
                bot.commands.get('help').execute(message, args);  //help command (returns >commands usage)
            break;

            case 'store':
                bot.commands.get('store').execute(message, args);  //store command (mc)
            break;

            case 'games':
                bot.commands.get('games').execute(message, args);  //games list command
            break;

            case 'news':
                bot.commands.get('news').execute(message, args);  //news command
            break;

            case 'docs':
                bot.commands.get('docs').execute(message, args, bot);  //documentation for the bot
            break;

            case 'vote':
                bot.commands.get('vote').execute(message, args);  //vote command
            break;

            case 'serverinfo':
                bot.commands.get('serverinfo').execute(message, args, bot);  //server info command
            break;

            case 'say':
                const usermsg = message.content
                message.channel.send(usermsg.replace(">say","")) 
                console.log(message.author.username, ":", usermsg)     //>say returns whatever you say as if the bot said it 
                message.delete()
            break;

            case 'weather':
                bot.commands.get('weather').execute(message, args, bot);  //unavailable 
            break;

            case 'rpsmenu':
                bot.commands.get('rpsmenu').execute(message, args, bot);  //rock paper scissors
            break;

            case 'rps':
                bot.commands.get('rps').execute(message, args, bot);  //rock paper scissors game 
            break;

            case 'spam':
                bot.commands.get('spam').execute(message, args, bot);  //spams the word: "SPAM" (not available)
            break;

            case 'ping':
                bot.commands.get('ping').execute(message, args, bot);  //ping command (Latency) 
            break;

            case 'invite':
                bot.commands.get('invite').execute(message, args);  //sends the invite link of the bot in the chat

            case 'info':
                bot.commands.get('info').execute(message, args, bot);  //displays server and bot info
            break;

            case 'patreon':
                bot.commands.get('patreon').execute(message, args, bot); //patreon link
            break;

            case '8ball':
                bot.commands.get('8ball').execute(message, args, bot); //8ball command 
            break;

            case 'logs':
                bot.commands.get('logs').execute(message, args, bot); //logs from the bot 
            break;

           // case 'lyrics':
                //bot.commands.get('lyrics').exectue(message, args, bot)  //lyrics finder
            //break;

            //ADMINISTRATOR ONLY COMMANDS//

            case 'clear': 
                if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('Oops! you dont have permission to run that command')  //clear messages
                if(!args[1]) return message.reply('Error. please define how many messages to clear.')
                message.channel.bulkDelete(args[1]);
                console.log('messages cleared by user')
            break;

            //case 'channel':
                //if(!message.member.hasPermission("ADMINISTRATOR", explicit = true)) return message.channel.send('Oops! you dont have permission to run that command')  //channel
                //if(!args[1]) return message.reply('Error. The defined amount of channels is invalid. Try again.')
                //message.channel.delete(args[1]);
                //console.log('channels cleared by user')
            //break;


            case 'channel':
                message.reply('This command is blacklisted.')
            break;

    

            case 'kick':
                bot.commands.get('kick').execute(message, args, bot);  //kicks the user
            break;

            case 'kickv2':
                bot.commands.get('kickv2').execute(message, args, bot);  //kicks the user
            break;

            case 'ban':
                bot.commands.get('ban').execute(message, args, bot);  //bans the user
            break;

            case 'unban':
                bot.commands.get('unban').execute(message, args, bot); //test command for unbanning users
            break;

            case 'mp4link':
                bot.commands.get('mp4link').execute(message, args, bot); //test command for unbanning users
            break;

            case 'nuke':
                bot.commands.get('nuke').execute(message, args, bot);  //nuke gifs
            break; 



        
            

            

//console chatter
let y = process.openStdin()
y.addListener("data", rest => {
    let x = res.toString().trim().split(/ + /g)
    bot.channels.get("790104096710459433").send(x.join(" "));
});






            




            

            


            
            
        }


    } else {
        return;
    }

})






keepAlive();
bot.login(botconfig.token);
