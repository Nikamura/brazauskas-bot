FROM  mikenye/youtube-dl

RUN apt-get update
RUN apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_14.x | bash -
RUN apt-get install -y nodejs 
RUN npm install -g yarn

RUN youtube-dl -U

WORKDIR /bot

COPY package.json yarn.lock ./
RUN yarn install

COPY . .

RUN yarn tsc

ENTRYPOINT []

CMD ["node","dist/index.js"]
