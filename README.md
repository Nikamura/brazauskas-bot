### Brazauskas Bot

Running locally in docker

```
docker build -t cnbot -t registry.karolis.host/cnbot .
docker run --env-file .env -v $(pwd)/config:/config/ -v $(pwd)/tmp:/bot/tmp/ -it -p 3000:3000 cnbot
```
