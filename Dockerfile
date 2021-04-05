FROM mikenye/youtube-dl:2021.04.01

WORKDIR /bot

COPY . .

RUN apt-get update && \
  apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -y nodejs && \
  npm install -g yarn && \
  youtube-dl -U && \
  yarn install && \
  yarn tsc

ENTRYPOINT ["/bot/entrypoint.sh"]

CMD ["node","dist/index.js"]
