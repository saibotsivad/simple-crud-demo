CREATE DATABASE simple_crud_demo;
USE simple_crud_demo;

CREATE TABLE authentication (
	authentication_id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	username VARCHAR(128) NOT NULL,
	password VARCHAR(128) NOT NULL,
	expires DATETIME NOT NULL,
	PRIMARY KEY (authentication_id),
	UNIQUE KEY username_key (username)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
