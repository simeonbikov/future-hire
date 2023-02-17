drop table if exists skills;
drop table if exists students;
drop table if exists students_account;

CREATE TABLE students_account 
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    pwd VARCHAR(10) NOT NULL
);

CREATE TABLE students 
(
    id SERIAL PRIMARY KEY,
    student_account_id INT REFERENCES students_account(id),
    full_name VARCHAR(120) NOT NULL,
    cohort VARCHAR(200) NOT NULL,
    passing_year date NOT NULL,
    email VARCHAR(120) NOT NULL,
    mobile VARCHAR(20),
    professional_interest VARCHAR(120),
    gender VARCHAR(20),
    photo_url VARCHAR(200),
    details VARCHAR(500),
    github_link VARCHAR(120),
    linkedin_link VARCHAR(120),
    hire VARCHAR(120)
    
);


CREATE TABLE skills 
(
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    skill VARCHAR(50) NOT NULL
);





                      






