-- Create the database movie_planner_db and specified it for use.
CREATE DATABASE burgers_db;
USE burgers_db;

-- Create the table plans.
CREATE TABLE burgers
(
id int NOT NULL AUTO_INCREMENT,
burger_name varchar(255) NOT NULL,
devoured BOOLEAN NOT NULL DEFAULT FALSE,
PRIMARY KEY (id)
);

-- Insert a set of records.
-- INSERT INTO movies (movie) VALUES ('Rush Hour 2');
