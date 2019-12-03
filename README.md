## About the app
Actually, there are two separated apps. The Client which serves the FrontEnd (using React), and the API (in Node/Express).

## How to run the API
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app.

## How to run the Client
1. In another terminal, navigate to the `client` directory.
2. Run `npm install` to install all dependencies.
3. Run `npm start` to start the app

## How to run the ALL
1. In your terminal, navigate to the main directory.
2. Run `docker-compose up --build` to install all dependencies.
3. Run `docker-compose up` to start the app.


## Check if they are connected
1. With the two apps running, open your browser in http://localhost:3000/.
2. With the two API running, open your browser in http://localhost:9000/.
3. With the two DB running, open your browser in http://localhost:27017/.
4. If the same webpage has the phrase `API is working properly`, it means the API is working.
5. Enjoy!
