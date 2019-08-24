FROM node:12.9.0-alpine

RUN apk add --update \
    python \
    ffmpeg

ADD https://www.mediacollege.com/downloads/sound-effects/animals/dog/dogs-01.wav sounds/dogs.wav

COPY . .

RUN npm i

CMD [ "npm", "start" ]
