# ui-service
This repo will hold UI related code and config

### Steps to start the process


#### Install angular dependencies
`npm i`

#### Install server dependencies
`cd server/ && npm i && cd ..`

#### Install mock server dependencies (optional)
`cd mock-server/ && npm i && cd ..`


#### Build ui
`npm run build`

#### Start server with BASE_URL
`BASE_URL='http://localhost:8070/api' npm run start`


#### start mock-server (this start the mock server with 8070 port which can be used as BASE_URL)
`npm run mock`

