# Github Repo Searcher
[![NPM](https://img.shields.io/static/v1?label=npm&message=6.14.10&color=blue)](https://shields.io/)
[![NODE](https://img.shields.io/static/v1?label=node&message=14.15.4&color=success)](https://shields.io/)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](https://shields.io/)

## My Tech Stack (MERN)

#### FrontEnd
* Front-end Library: `React.js (Hooks)`
* Styling: `SASS`

#### BackEnd
* For handling server requests: `Node.js with Express.js Framework on typescript`
* As Database: `Redis (Docker container)`
* API tested using: `POSTMAN`

## Guidelines to setup
1. Create a `.env` file within the `/api/config`.
    ```
    GITHUB_ACCESS_TOKEN = <your_github_user_access_token>
    ```
2. Install dependencies in both projects. Go even to `/api` and `/app` and run: 
    ```
    yarn install (or npm run install)
    ```
3. Run the command `docker-compose up -d` to start the Redis container.

4. Run the command `yarn start (or npm run start)` in both projects `/api` and `/app` (in two different terminals): 

5. Go to `http://localhost:3000/` and you should see the project running.

## Not including because of time constrains
* Swagger documentation.
* Unit testing.

## IMAGE
<img src="https://tradeling.s3.amazonaws.com/Screen+Shot+2021-02-03+at+11.44.45+PM.png" width=340px />
<img src="https://tradeling.s3.amazonaws.com/Screen+Shot+2021-02-04+at+12.09.50+AM.png" width=340px />
