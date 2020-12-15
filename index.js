const Discord = require('discord.js');
const { prefix, token } = require('./config.json')
const client = new Discord.Client();


client.once('ready', () => {
	console.log(`bot logged in as client.user.bot`);
})

client.on('message', message =>{
     if (message.member.hasPermission(['KICK_MEMBERS', 'BAN_MEMBERS'])) {
		 
	console.log(message.content);

	 if(message.content.startsWith(`${prefix}kick`)) {
		 //message.channel.send("ok")

		 let member = message.mentions.members.first();
		 member.kick().then((member) => {

            message.channel.send(":wave: " + member.displayName + " has been kicked. You can now continue your day: :smile:")
			
		 })
		}

	 }
})

client.login(token);

//To run your bot run this command "node index.js to host a bot free go to this link https://github.com/Lucian648/Discord-Moderater-Bot/blob/main/Host%20bot%2024%5C7%20*FREE*"
