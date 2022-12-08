CREATE TABLE payments(
    id Integer,
    purchaseType VARCHAR(80),
	vendor VARCHAR(256),
	walletAddress VARCHAR(80),
    code VARCHAR(80),
	PRIMARY KEY (id)
);