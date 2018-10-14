const fs = require('fs');
const Discord = require('discord.js');
const config = require('./config.json')
const token = require('./token.json')

function choice(list) {
  return list[Math.floor(Math.random() * list.length)];
}

function getRandomFile(folder) {
  return folder + '/' + choice(fs.readdirSync(folder));
}

function playSound(message) {
  if (message.member.voiceChannel) {
    message.member.voiceChannel.join().then(connection => {
      connection.playFile(getRandomFile(config['soundFolder']));
    }).catch(console.log);
  } else {
    message.reply('You need to be in a voice channel');
  }
}

const client = new Discord.Client();

client.on('message', message => {
  if (message.content === '!sound') {
    playSound(message);
  }
});

client.login(token['token']);
