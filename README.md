## Frontend

- it is built using react and react-router and redux toolkit
- add the env file to the root of the project including the following:

```api
{
  "apiUrl": "http://localhost:3000/api",

}
```

- install the dependencies using npm install
  -run the app using npm start

## Backend

- it is built using node and express and nest js
- add the env file to the root of the project including the following:

```api
{
  "apiUrl": "http://localhost:3000/api",
DB_HOST= localhost
DB_PORT=5432
DB_USERNAME=moo
DB_PASSWORD=1234
DB_DATABASE=moo
NODE_ENV=development
JWT_ACCESS_TOKEN_EXPIRY_PERIOD=2d
JWT_EXPIRES_IN=2
JWT_REFRESH_EXPIRES_IN=7
JWT_REFRESH_SECRET=mogoba
JWT_SECRET=mogoba
REFRESH_TOKEN_DURATION=10

}
```

- the project used postgres as the database

- install the dependencies using yarn install
  -run the app using yarn start
