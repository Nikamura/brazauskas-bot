FROM mikenye/youtube-dl:latest as core

RUN apt-get update && \
  apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_16.x | bash - && \
  apt-get install -y nodejs python3 python3-pip && \
  npm install -g yarn && \
  python3 -m pip install -U yt-dlp

FROM core as build

WORKDIR /bot

COPY . .

RUN yarn install && \
  yarn build

FROM core as final

WORKDIR /bot

COPY --from=build /bot ./
COPY entrypoint.sh ./

ENV PATH="/bot:${PATH}"

ENTRYPOINT ["/bot/entrypoint.sh"]

CMD ["node", "dist/index.js"]
