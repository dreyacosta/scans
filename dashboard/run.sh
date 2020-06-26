#!/bin/bash

echo "Application environment: $APP_ENV"

if [ "$APP_ENV" == "test" ]; then
  npm run lint
  npm test
elif [ "$APP_ENV" == "dev" ]; then
  npm run dev
else
  npm start
fi
