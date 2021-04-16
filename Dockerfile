FROM mikenye/youtube-dl:2021.04.07 as core

RUN apt-get update && \
  apt-get install -y curl && \
  curl -sL https://deb.nodesource.com/setup_14.x | bash - && \
  apt-get install -y nodejs && \
  npm install -g yarn prisma && \
  youtube-dl -U

FROM core as build

WORKDIR /bot

COPY . .

RUN  yarn install && \
  yarn build

FROM core as final

WORKDIR /bot

COPY --from=build /bot/dist ./
COPY prisma/migrations/ ./migrations/
COPY entrypoint.sh ./

ENTRYPOINT ["/bot/entrypoint.sh"]

EXPOSE 3000/tcp

CMD ["node", "index.js"]
