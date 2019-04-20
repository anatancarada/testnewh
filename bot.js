const Discord = require('discord.js');
const client = new Discord.Client();



// playing
client.on('ready', () => {                           
});



client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTQ1MDMzMTc3ODA3MzIzMTQ4.D0TxcA.oqcAHE6yMLDfQD-op4PUAxkkCxs');