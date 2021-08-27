FROM mikenye/youtube-dl:2021.06.06 as core

RUN apt-get update && \
  apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -y nodejs && \
  npm install -g yarn

FROM core as build

WORKDIR /bot

COPY . .

RUN yarn install && \
  yarn build

FROM core as final

WORKDIR /bot

COPY --from=build /bot/dist ./
COPY entrypoint.sh ./

RUN curl -O -L https://github.com/yt-dlp/yt-dlp/releases/download/2021.08.10/yt-dlp && \
  chmod +x yt-dlp && \
  ./yt-dlp -U

ENV PATH="/bot:${PATH}"

ENTRYPOINT ["/bot/entrypoint.sh"]

CMD ["node", "index.js"]
