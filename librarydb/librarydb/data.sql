-- AUTHOR_ID TABLE
INSERT INTO author_author(author_name)
VALUES
    ('Leslie McGuire')
;


INSERT INTO author_author(author_name)
VALUES
('Leslie McGuire'),
('Garth Williams'),
('Leah Gale'),
('William S. Gray'),
('Dr. Seuss'),
('Kimberly Brubaker Bradley'),
('Felicity Brown'),
('Ellen Miles'),
('Dominique De Vito'),
('Selina Gibsone & Jenny Palser'),
('Kelly L. Murdock'),
('Konami Kanata'),
('Kaiu Shirai'),
('Sorata Akiduki'),
('Kohei Horikoshi'),
('Madeleine Rosca'),
('Mamoru Hosoda'),
('Traci Hunter Abramson'),
('Clari M. Poulson'),
('Stephanie Black')
;


-- publish_id table

INSERT INTO publish_publish(publish_name)
VALUES

    ('A Little Golden Book'),
    ('Grosset & Dunlap'),
    ("Random House Children's Books"),
    ('Dial Books'),
    ("HarperCollins Children's Books"),
    ('Scholastic Paperbacks'),
    ('Tfh Pubns Inc'),
    ('Parragon Book Service Ltd'),
    ('SDC Publications'),
    ('Vertical Comics'),
    ('VIZ Media LLC'),
    ('Seven Seas'),
    ('Yen Press'),
    ('Covenant Communications')
;


-- BOOK TABLE
INSERT INTO book(title, author_id, genre, format, binding, rating, language, edition, num_pages, copyright_yr, qty, pub_id) 
Values 
    ('Quints 1 2 3 4 5 The Cleanup', 1, 'Childrens Fiction', 'physical', 'hardback', 
    '4.7', 'English', '1st edition', '12', '1991', 1, 1
);


INSERT INTO book(title, author_id, genre, format, binding, rating, language, edition, num_pages, copyright_yr, qty, pub_id) 
Values 
    ('Baby Animals', 2, 'Childrens Fiction', 'physical', 'hardback',  
    '4.8', 'English', '1st edition', '24', '2004', 2, 1),

    ('The Animals of Farmer Jones', 3, 'Childrens Fiction', 'physical', 'hardback', 
    '4.8', 'English', '1st edition', '26', '2018', 3, 1),

    ('The World of Dick and Jane and Friends', 4, 'Childrens Fiction', 'physical', 'hardback', 
    '4.7', 'English', '1st edition', '192', '2004', 14, 2),

    ('Wacky Wednesday', 5, 'Childrens Fiction', 'physical', 'hardback', 
    '4.9', 'English', '1st edition', '36', '1974', 1, 3),

    ('The Perfect Pony', 6, 'Childrens Fiction', 'physical', 'hardback', 
    '4.6', 'English', 'reissue edition', '32', '2007', 16, 4),

    ("Bella Sara Thunder's Courage", 7, 'Fantasy', 'physical', 'paperback', 
    '3.8', 'English', '6th edition', '122', '2009', 7, 5),

    ('The Puppy Place Where every puppy finds a home Bubbles and Boo', 8, 'Fiction', 'physical',  'paperback', 
    '4.8', 'English', '1st edition', '96', '2017', 8, 6),

    ('Animal Planet Training Your Dog', 9, 'Eduction', 'physical', 'hardback', 
    '4.7', 'English', 'special edition', '112', '2007', 9, 7),

    ('Dog Tricks', 10, 'Education', 'physical', 'hardback', 
    '5.0', 'English', 'deluxe edition', '80', '2008', 2, 8),

    ('Autodesk Maya 2022 Basics Guide', 11, 'Education', 'physical', 'paperback', 
    '4.6', 'English', '1st edition', '600', '2025', 5, 9),

    ("The Complete Chi's Sweet Home",  12, 'Comic Fiction', 'physical', 'paperback', 
    '4.8', 'English', 'Illustrated', '480', '2015', 12, 10),

    ('The Promised Neverland', 13, 'Fantasy', 'physical',  'paperback', 
    '4.8', 'English', 'Translation', '192', '2017', 13, 11),

    ('Snow White with the Red Hair', 14, 'Fantasy', 'physical', 'paperback', 
    '3.8', 'English', 'collectible edition', '200', '2019', 7, 11),

    ('My Hero Academia', 15, 'Action', 'physical', 'paperback', 
    '4.9', 'English', 'Illustrated', '192', '2016', 14, 11),

    ('Hollow Fields', 16, 'Fantasy', 'physical', 'paperback', 
    '4.7', 'English', '1st edition', '192', '2007', 6, 12),

    ('Wolf Children Ame & Yuki', 17, 'Fantasy', 'physical', 'hardback', 
    '4.8', 'English', '1st edition', '550', '2014', 15, 13),

    ('Unseen', 18, 'Mystery', 'physical', 'paperback', 
    '4.6', 'English', '1st edition', '240', '2023', 16, 14),

    ('Accused', 19, 'Mystery', 'physical', 'paperback', 
    '4.6', 'English', 'reprint edition', '232', '2023', 17, 14),

    ('The Tresspassers', 20, 'Mystery', 'physical', 'paperback', 
    '4.7', 'English', '1st edition', '288', '2023', 18, 14)
;

-- adding images to the database
UPDATE book SET cover_img = '' WHERE book_id = 1;
UPDATE book SET cover_img = '' WHERE book_id = 2;
UPDATE book SET cover_img = '' WHERE book_id = 3;
UPDATE book SET cover_img = '' WHERE book_id = 4;
UPDATE book SET cover_img = '' WHERE book_id = 5;
UPDATE book SET cover_img = '' WHERE book_id = 6;
UPDATE book SET cover_img = '' WHERE book_id = 7;
UPDATE book SET cover_img = '' WHERE book_id = 8;
UPDATE book SET cover_img = '' WHERE book_id = 9;
UPDATE book SET cover_img = '' WHERE book_id = 10;
UPDATE book SET cover_img = '' WHERE book_id = 11;
UPDATE book SET cover_img = '' WHERE book_id = 12;
UPDATE book SET cover_img = '' WHERE book_id = 13;
UPDATE book SET cover_img = '' WHERE book_id = 14;
UPDATE book SET cover_img = '' WHERE book_id = 15;
UPDATE book SET cover_img = '' WHERE book_id = 16;
UPDATE book SET cover_img = '' WHERE book_id = 17;
UPDATE book SET cover_img = '' WHERE book_id = 18;
UPDATE book SET cover_img = '' WHERE book_id = 19;
UPDATE book SET cover_img = '' WHERE book_id = 20;