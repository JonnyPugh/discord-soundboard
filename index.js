const fs = require('fs');
const Discord = require('discord.js');

const getRandomSoundFile = () => {
  const folder = 'sounds'
  const files = fs.readdirSync(folder);
  return folder + '/' + files[Math.floor(Math.random() * files.length)];
}

const playSound = async (message) => {
  const voiceChannel = message.member.voiceChannel;
  if (voiceChannel) {
    try {
      const connection = await voiceChannel.join();
      const dispatcher = connection.playFile(getRandomSoundFile());
      dispatcher.on('end', () => voiceChannel.leave());
      dispatcher.on('error', err => {
        console.log(err);
        voiceChannel.leave();
      });
    } catch(err) {
      console.log(err);
    }
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

client.login(process.env.SOUNDBOARD_TOKEN);
