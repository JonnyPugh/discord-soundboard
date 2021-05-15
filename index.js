const fs = require('fs');
const Discord = require('discord.js');

const getRandomSoundFile = () => {
  const folder = 'sounds'
  const files = fs.readdirSync(folder);
  return folder + '/' + files[Math.floor(Math.random() * files.length)];
}

const playSound = async (channel) => {
  try {
    const connection = await channel.join();
    const dispatcher = connection.play(getRandomSoundFile());
    dispatcher.on('finish', () => channel.leave());
    dispatcher.on('error', err => {
      console.log(err);
      channel.leave();
    });
  } catch(err) {
    console.log(err);
  }
}

const client = new Discord.Client();

client.on('message', message => {
  if (message.content === '!sound') {
    const channel = message.member.voice.channel;
    if (channel) {
      playSound(channel);
    } else {
      message.reply('you need to be in a voice channel');
    }
  }
});

client.login(process.env.SOUNDBOARD_TOKEN);
