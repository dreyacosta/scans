#!/bin/bash

echo "Application environment: $APP_ENV"

if [ "$APP_ENV" == "test" ]; then
  npm test
elif [ "$APP_ENV" == "dev" ]; then
  echo "Running dev app..."
else
  npm start
fi
