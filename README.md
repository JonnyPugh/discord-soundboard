# discord-soundboard
Discord bot that plays sounds

## Setup
- [Install ffmpeg](https://github.com/discordjs/discord.js/blob/master/docs/general/faq.md#how-do-i-install-ffmpeg)
- `npm i`

## Building and Running
```
docker build . -t soundboard
docker run -e SOUNDBOARD_TOKEN=<Discord API token> -v <Path to sound file directory>:/sounds soundboard
```

## [Docker Repository](https://hub.docker.com/r/jonnypugh/soundboard)
