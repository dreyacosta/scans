# Scans
[![Build Status](https://travis-ci.org/dreyacosta/scans.svg?branch=master)](https://travis-ci.org/dreyacosta/scans)

Scans your repositories to alert you of any vulnerabilities and security issues.

## Setup
### System requirements
- [Docker](https://www.docker.com/products/docker-desktop)

### Run tests

**API**
```sh
cd api && ./bin/test.sh
```

**DASHBOARD**
```sh
cd dashboard && ./bin/test.sh
```

### Run the application
```sh
docker-compose up
```

By default the application populates 5 scans and runs on: [http://localhost:3000](http://localhost.com)

## About the solution

### API
#### Comments
- Default status for Scan is `QUEUED`
- Not implemented: `ScanCreatedDomainEvent` could be pushed into an AMQP to be consumed by another service (e.g. `Findings`)
- Not implemented: `Scans` and `Findings` could be two separate DBs. 1 DB for `Scans service` and 1 DB for `Findings service`
- Not implemented: There could be a 3rd service for notifications. Once the `Findings service` is done, it could pushed `FindingsCompletedDomainEvent` into an AMQP. This event could be consumed by `Notifications service` to notified the client and `Scans service` to update the `Scan.status`
- Not implemented: Healthcheck endpoint
- Not implemented: APM, Logging, Error monitoring. Important thing to know how the service behaves. Ideas: New Relic, Rollbar, Sentry, Grafana, Prometheus

#### Architecture idea
![scans-architecture-idea](https://user-images.githubusercontent.com/1833123/77845519-18275580-71e2-11ea-93c3-50418c877035.png)

### Dashboard
#### Comments
- Customer only needs to submit repository name (or repo URL) to scan a repository.
- Not implemented: APM, Logging, Error monitoring. Ideas: New Relic, Rollbar, Sentry
- Not implemented: Notifications. An idea could be to have a `Notifications service` and connect it via WebSocket to get real-time updates about `Findings`
- Not implemented: In Scans page, findings counter is always in grey color. Idea could be to change the label background color based on the numbers or severity level of the findings