PW Justfuckingwork1!


Structured Query Language - query language that allows us to interact with a database through queries(doesnt run through web server).Good for working with huge data sets.There is functionality built in that makes working with big data sets easy.You can use queries to break data into smaller chucks.

CRUD = create, read, update, delete.

Relational database - database is a store of data;
relational database organizes data into tables that hold a group oif data that can be linked in the form of relationships(like an excel spreadsheet).

Link tables - linked based on common data(key - identifies rows) that can be matched between different tables.

Queries - interatcs from names of tables, columns and relationship
Select *
    From A_TABLE
inner join A_RELATED_TABLE
on DATA_THEY_HAVE_IN_COMMON;


access mySQl in shell using < mysql - v >
    mysql - u root - p //run sql in server 

run commands
for mysql: #1 - running query in shell & # 2 running an sql file

//in powershell
Create new database:
    CREATE DATABASE products;
SHOW DATABASES;

Tell system you want to use the database:
    USE products;

See current database:
    SELECT DATABASE();

shows tables in current directory:
    SHOW TABLES;

remove a database:
    DROP DATABASE IF EXISTS products;

//create tables in database
// In Terminal
SHOW DATABASE();
CREATE TABLE productinfo(id INT, name VARCHAR(100));
SHOW TABLES;
SELECT * FROM productinfo; - > navs to the data inside the table

//IN SCHEMA
DROP DATABASE IF EXISTS products;
CREATE DATABASE products;
USE products;
CREATE TABLE products(
        id INT,
        name VARCHAR(100)
    ),
    run source schema.sql in command line && &
    SHOW DATABASE();
USE products;
SHOW TABLES;

//add items into table
INSERT INTO products(id, name) VALUES(01, 'nope'); //can be done in cl or schema
SELECT * FROM products

//TARGET 1 ITEM IN LIST OF ITEMS 
SELECT name FROM prodcuts WHERE id = 2;

//delete an item
DELETE FROM products WHERE id = 3;

//update an item
UPDATE products SET name = chzbrgr WHERE id = 2;
SELECT * FROM products;