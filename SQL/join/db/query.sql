-- Add your code below and execute file in MySQL Shell --
//in shell:

login to sqlserver
source schema.sql
source seeds.sql
SELECT * FROM favorite_books JOIN book_prices ON favorite_books.book_price = book_prices.id;



