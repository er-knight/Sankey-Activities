CREATE DATABASE olx_db_simple;

USE olx_db_simple;

CREATE TABLE Buyer (
	buyer_id INT,
    buyer_name VARCHAR(20),
    buyer_email VARCHAR(50),
    buyer_phone VARCHAR(10),
    buyer_address VARCHAR(50),
    
    PRIMARY KEY (buyer_id)
);

CREATE TABLE Seller (
	seller_id INT,
    seller_name VARCHAR(20),
    seller_email VARCHAR(50),
    seller_phone VARCHAR(10),
    seller_address VARCHAR(50),
    
    PRIMARY KEY (seller_id)
);

CREATE TABLE Product (
	product_id INT,
    product_name VARCHAR(50),
    product_description VARCHAR(100),
    product_price INT,
    
    PRIMARY KEY (product_id)
);

CREATE TABLE Transaction (
	transaction_id INT,
    transaction_date DATE,
    transaction_amount INT,
    buyer_id INT,
    seller_id INT,
    product_id INT,
    
    PRIMARY KEY (transaction_id),
    FOREIGN KEY (buyer_id) REFERENCES Buyer(buyer_id),
	FOREIGN KEY (seller_id) REFERENCES Seller(seller_id),
	FOREIGN KEY (product_id) REFERENCES Product(product_id)
)