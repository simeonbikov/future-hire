drop table if exists students;

CREATE TABLE students 
(
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    location VARCHAR(200) NOT NULL,
    passing_year date NOT NULL
);

INSERT INTO students
    (name, location, passing_year)
VALUES
    ('Kavita Patil', 'West Midlands', '2023-03-31');
INSERT INTO students
    (name, location, passing_year)
VALUES
    ('Franklin', 'West Midlands', '2023-03-31');
INSERT INTO students
    (name, location, passing_year)
VALUES
    ('Simeon', 'West Midlands', '2023-03-31');
INSERT INTO students
    (name, location, passing_year)
VALUES
    ('Brolin', 'West Midlands', '2023-03-31');
INSERT INTO students
    (name, location, passing_year)
VALUES
    ('Emeka', 'West Midlands', '2023-03-31');
