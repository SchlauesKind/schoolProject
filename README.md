#

## Commands for myself:

- run "npm run dev" to see project in live
- run "npm run build" to build and get /dist/
- run "npx serve dist" to test your build
- run "npx gh-pages -d dist" to deploy directly

## Checklist before deployment

- check the project shown in npm localhost
- check the build shown in serve
- deploy

## How to check the build via serve and deploy safely

The project has a defined structure of the /dist/ folder so it must be the same everywhere. To do so in the serve, follow these steps:

- run "npm run build"
- make a dir /dist/schoolProject/
- put content of /dist/ into /dist/schoolProject/
- run "npx serve dist" to test your build

After you do these steps, the /dist/ is probably broken and won't work on GitHub. To repair it, do folowing steps:

- run "npm run build"
- run "npx gh-pages -d dist" to deploy

Done;
