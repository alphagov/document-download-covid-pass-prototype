# document-download-covid-pass-prototype

## Install dependencies
```
npm ci
```

## Run the kit locally

Add the API key for the Notify service to the `.env` file:

```bash
API_KEY="paste-api-key-here"
```
Run the app using:

```bash
npm run watch
```
Visit http://localhost:3000

## Deploy

This should be deployed in the `prototypes` space using:

```bash
cf push covid-pass --strategy=rolling
```

We have already set environment variables in the PaaS for `API_KEY`, `PROTOTYPE_PASSWORD`, and `PROTOTYPE_USERNAME`
