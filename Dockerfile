FROM node:12.9.0-alpine

RUN apk add --update \
    python \
    ffmpeg

COPY . .

RUN npm i

ADD https://www.mediacollege.com/downloads/sound-effects/animals/dog/dogs-01.wav sounds/dogs.wav

CMD [ "npm", "start" ]
