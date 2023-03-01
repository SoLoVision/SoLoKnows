//import the necessary packages
const Discord = require('discord.js');
const ChatGPT = require('chat-gpt');

//Create the Discord Client 
const client = new Discord.Client();

//The prefix for the Bot's commands 
const prefix = '!';

//Setup the ChatGPT Client
const chatgpt = new ChatGPT('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');

//When the bot is ready, log a message
client.once('ready', () => {
  console.log('SoLoBot is ready!');
});

//Listen for messages
client.on('message', async message => {
  //Check if the prefix is present 
  if(!message.content.startsWith(prefix) || message.author.bot) return;

  //Split the message into arguments
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  //Check for the command 
  if(command === 'ask'){
    //Get the query from the arguments 
    const query
= args.join(' ');
    //Send the query to the ChatGPT API
    const response = await chatgpt.sendMessage(query);
    //Send the response back to the server
    message.channel.send(response.data.answer);
  }
});

//Log the bot in 
client.login('MTA4MDUzNjY0ODIyNTQxMTE1Mg.GHW9IY.iL1P6vTSqznIkc70gG4VVtGtjOSoqmCMVFPKmA');