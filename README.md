# 120-headless-cms

## Run dev
  `docker-compose -f docker-compose.dev.yml up --build`
## Run Production
  * Run with console: `docker-compose -f docker-compose.prod.yml up --build`
  * Run and continuos (whitoout console): `docker-compose -f docker-compose.prod.yml up --build -d`
  * Stop container: `docker-compose -f docker-compose.prod.yml stop`
