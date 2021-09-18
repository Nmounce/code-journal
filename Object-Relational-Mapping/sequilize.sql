Library: Sequelize install with npm model data in js Classes easy to
join relational data / / config DROP DATABASE IF EXISTS library_db;

CREATE DATABASE library_db;

/ / connection file const Sequelize = require('sequelize');

/ / Create a connection object const sequelize = new Sequelize(
    / / Database name 'library_db',
    / / User 'root',
    / / Password 'myPassword',
    { / / Database location host: 'localhost',
    dialect: 'mysql',
    port: 3306 }
);

module.exports = sequelize;

/ / Packages "dependencies": { "express": "^4.17.1",
"mysql2": "^2.2.5",
/ / has to be included to run Sequelize "sequelize": "^6.3.5" } / / server const express = require('express');

/ / Import the connection object const sequelize = require('./config/connection');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/ / Connect to the database before starting the Express.js server sequelize.sync().then(
    () = > { app.listen(PORT, () = > console.log('Now listening'));

}
);

Replace hardcoded credentials with enviornmental Variables (anything you want to hide, put in.env file) npm i dotenv make.env file include: DB_HOST = localhost DB_USER = root DB_PASS = password DB_DB = library_db input require('dotenv').config() in connections.js file const sequelize = nequire('sequelize');

const sequelize = new Sequelize(
    process.env.DB_DB,
    process.env.DB_USER,
    process.env.DB_PASS,
    { host / / / finish }
) in gitignore include (.env)




//recreates table with default schema but eliminates any data from the table if not seeded
// Force true to drop/recreate table(s) on every sync
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});


find by primary key only returns primary key values (findbypk)
find and find all return an array