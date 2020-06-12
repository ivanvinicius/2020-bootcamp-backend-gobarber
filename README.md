# GoBaber back-end

GoBaber back-end built in NodeJs and Typescript.

## Description

This is GoBarber API, created to provide informations to WEB and Mobile versions. We gonna work with database concepts, authentication and authorization on back-end.

## How to run

1. Make sure you have `yarn` installed.
2. Make sure you have a database running like `PostgreSQL`.
3. To change the database connetion settings, go to file `ormconfig.json`.
4. To create tables on database using `MIGRATIONS` run the command `$ yarn typeorm migration:run`, or `$ yarn typeorm migration:revert` to revert the last migration created .
5. Go to database client and check if tables were created successfully.
6. Inside this project folder run the command `$ yarn` to download dependencies.
7. To run the project run the command `$ yarn dev:server`.

## Keep coding!!

By Ivan.
