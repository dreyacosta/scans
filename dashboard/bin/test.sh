#!/bin/sh

docker build --tag scans-dashboard:latest .
docker run --rm --tty --name scans-dashboard-test --env-file .env --env APP_ENV=test scans-dashboard:latest