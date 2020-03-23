#!/bin/sh

docker build --tag scans-api:latest .
docker run --detach --name mongo --tmpfs /data/db mongo:4-xenial
docker run --rm --tty --name scans-api-test --link mongo:mongo --env-file .env --env APP_ENV=test scans-api:latest
docker rm -f mongo