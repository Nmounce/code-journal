
Schema = shematic of table to show how data is displayed

DROP DATABASE IF EXISTS books_db;

CREATE DATABASE books_db;

USE books_db; //have to specify because the system wouldnt know what to do otherwise

CREATE TABLE A (
  birth_date      VARCHAR(100)    NOT NULL.
);

CREATE TABLE B (
  emp_no  INTEGER NOT NULL, 
  birth_date      VARCHAR(100)    NOT NULL.
  first_name  VARCHAR(100)    NOT NULL, 
  PRIMARY KEY (emp_no),
  UNIQUE KEY (birth_date)
  FOREIGN KEY (birth_date) REFERENCES A (birth_date) ON DELETE CASCADE,
  //MATCHES BIRTHDATE DATA IN TABLE B TO BIRTHDATE DATA IN TABLE A
);


DROP TABLE also drops tables from the database using the same method