DROP DATABASE IF EXISTS travel_db;

-- Created the "travel_db" (Only works on local connections)
CREATE DATABASE travel_db;
USE travel_db;

-- Creating the table called "spots"
CREATE TABLE spots (
    id INTEGER AUTO_INCREMENT,
    name VARCHAR(30) NOT NULL,
    type VARCHAR(15) NOT NULL,
    price INTEGER(1) NOT NULL,
    location VARCHAR(15) NOT NULL,
    start_time INTEGER(2) NOT NULL,
    end_time INTEGER(2) NOT NULL,
    PRIMARY KEY (id)
);

-- Created the table called "userData"
CREATE TABLE userData (
    id INTEGER AUTO_INCREMENT,
    firstName VARCHAR(30) NOT NULL,
    lastName VARCHAR(50) NOT NULL,
    phoneNumber INTEGER(10) NOT NULL,
    email VARCHAR 
    request VARCHAR(200),
    rDate date,
    locationID INTEGER(2) NOT NULL,
    PRIMARY KEY (id)
);

-- Created the table called "reservations"
CREATE TABLE reservations (
    id INTEGER AUTO_INCREMENT,
    userID INTEGER(4) NOT NULL,
    locaitonID VARCHAR(2) NOT NULL,
    rTime INTEGER(2) NOT NULL,
    rDate date,
    PRIMARY KEY (id)
);

-- Inserted data into the "spots" table
INSERT INTO spots (name, type, price, location, start_time, end_time) VALUES (

    -- Restaurnats
    ("Father's Office", "Restaurants", 1, "Santa Monica", 24, 2),
    ("Fig", "Restaurants", 2, "Santa Monica", 7, 22),
    ("Melisse", "Restaurants", 3, "Santa Monica", 5, 22),
    ("Il Pastio", "Restaurants", 1, "Beverly Hills", 11, 23),
    ("Hinoki & the Bird", "Restaurants", 2, "Beverly Hills", 11, 14 ),
    ("Spago", "Restaurants", "Expensive", "Beverly Hills", 18, 22),
    ("Beverly Soon Tofu", "Restaurants", 1, "Koreantown", 11, 22),
    ("Guelaguetza", "Restaurants", 2, "Koreantown", 9, 22),
    ("Parks's BBQ", "Restaurants", 3, "Koreantown", 7, 6 ),
    ("Grand Central Market", "Restaurants", 1, "Downtown LA", 8, 22),
    ("Badmaash", "Restaurants", 2, "Downtown LA", 11, 22),
    ("Broken Spanish", "Restaurants", 3, "Downtown LA", 17, 22),
    ("Guisados", "Restaurants", 1, "Hollywood", 11, 24),
    ("Luv2eat Thai Bistro", "Restaurants", 2, "Hollywood", 11, 23),
    ("Toris Mec", "Restaurants", 3, "Hollywood", 18, 24),

    -- Attractions
    ("Palisades Park", "Attractions", 1, "Santa Monica", 18, 23),
    ("Santa Monica Pier", "Attractions", 2, "Santa Monica", 11, 20),
    ("Third Street Promenade", "Attractions", 3, "Santa Monica", 10, 21),
    ("Rodeo Dr", "Attractions", 1, "Beverly Hills", 10, 18),
    ("Virginia Robinson Gardens", "Attractions", 2, "Beverly Hills",18, 22),
    ("Saban Theatre", "Attractions", 3, "Beverly Hills", 18, 24),
    ("Korean Plaze", "Attractions", 1, "Koreantown", 10, 20),
    ("Korean American National Museum", "Attractions", 2, "Koreantown", 10, 18),
    ("Chapman Plaza", "Attractions", 3, "Koreantown", 11, 1),
    ("Bradbury Building", "Attractions", 1, "Downtown LA", 9, 18),
    ("OUE Skyspace LA", "Attractions", 2, "Downtown LA", 10, 21),
    ("Walt Disney Concert Hall", "Attractions", "Expensive", "Downtown LA", 9, 17),
    ("Walk of Fame", "Atttractions", 1, "Hollywood", 9, 17),
    ("TCL Chinese Theatre", "Atttractions", 2, "Hollywood", 12, 23),
    ("Hollywood Bowl", "Atttractions", 3, "Hollywood", 10, 18),
    --  Hotels
    ("Courtyard by Marriott", "Hotels", 1, "Santa Monica"),
    ("Hotel Casa del Mar", "Hotels", 2, "Santa Monica"),
    ("Loews Santa Monica Beach Hotel", "Hotels", 3, "Santa Monica"),
    ("Sirtaj Hotel", "Hotels", 1, "Beverly Hills"),
    ("SIXTY", "Hotels", 2, "Beverly Hills"),
    ("Viceroy L'Ermitage", "Hotels", 3, "Beverly Hills"),
    ("Best Western Plus", "Hotels", 1, "Koreantown"),
    ("East West Hotel", "Hotels", 2, "Koreantown"),
    ("The LINE", "Hotels", 3, "Koreantown"),
    ("Freehand", "Hotels", 1, "Downtown LA"),
    ("Omni", "Hotels", 2, "Downtown LA"),
    ("Ritz-Carlton", "Hotels", 3, "Downtown LA"),
    ("Kimpton La Peer Hotel", "Hotels", 1, "Hollywood"),
    ("Petit Ermitage", "Hotels", 2, "Hollywood"),
    ("The Jeremy West Hollywood", "Hotels", 3, "Hollywood"),
);



