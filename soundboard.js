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
  let voiceChannel = message.member.voiceChannel;
  if (voiceChannel) {
    voiceChannel.join().then(connection => {
      connection.playFile(getRandomFile(config['soundFolder'])).on('end', () => {
        voiceChannel.leave();
      });
    }).catch(console.log);
  } else {
    message.reply('you need to be in a voice channel');
  }
}

const client = new Discord.Client();

client.on('message', message => {
  if (message.content === '!sound') {
    playSound(message);
  }
});

client.login(token['token']);
