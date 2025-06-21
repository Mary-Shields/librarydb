
DROP DATABASE IF EXISTS librarydb;
CREATE DATABASE librarydb;
USE librarydb;


-- author table
CREATE TABLE author_author(
    author_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    author_name VARCHAR(30),
    CONSTRAINT pk_author PRIMARY KEY (author_id)
);

-- publish table
CREATE TABLE publish_publish(
    publish_id SMALLINT UNSIGNED AUTO_INCREMENT NOT NULL,
    publish_name VARCHAR(40),
    CONSTRAINT pk_publish PRIMARY KEY (publish_id)
);


-- library table
CREATE TABLE book (
    book_id TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    genre VARCHAR(50) NOT NULL,
    -- author VARCHAR(50) NOT NULL,
    format VARCHAR(60) NOT NULL,
    binding VARCHAR(20) NOT NULL,
    -- publish_company VARCHAR(20) NOT NULL,
    qty TINYINT UNSIGNED,
    num_pages TINYINT UNSIGNED,
    rating TINYINT UNSIGNED,
    copyright_yr YEAR,
    language VARCHAR(20) NOT NULL,
    edition VARCHAR(20) NOT NULL,
    author_id TINYINT UNSIGNED,
    pub_id TINYINT UNSIGNED,
    cover_img MEDIUMTEXT,
    date_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT pk_book PRIMARY KEY (book_id) 
);

ALTER TABLE book
MODIFY edition VARCHAR(40) NOT NULL;

ALTER TABLE book MODIFY num_pages SMALLINT;
ALTER TABLE book MODIFY copyright_yr SMALLINT;

ALTER TABLE book 
MODIFY binding VARCHAR(20);

ALTER TABLE book DROP COLUMN author;
ALTER TABLE book DROP COLUMN publish_company;

DROP TABLE IF EXISTS title_title;



set @num := 0;
UPDATE book SET book_id = @num:= (@num + 1);
ALTER TABLE book AUTO_INCREMENT = 1;