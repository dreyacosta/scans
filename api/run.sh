#!/bin/bash

echo "Application environment: $APP_ENV"

if [ "$APP_ENV" == "test" ]; then
  npm run lint && npm test
elif [ "$APP_ENV" == "dev" ]; then
  if [ -n "$APP_POPULATE" ]; then
    npm run populate:scans -- --number $NUMBER_SCANS
  else
    npm run start
  fi
fi
