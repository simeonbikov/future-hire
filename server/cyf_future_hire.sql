drop table if exists student_url;
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
    photo_url VARCHAR(200)
);

CREATE TABLE student_url 
(
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    link VARCHAR(120) NOT NULL
);
CREATE TABLE skills 
(
    id SERIAL PRIMARY KEY,
    student_id INT REFERENCES students(id),
    skill VARCHAR(50) NOT NULL
);

INSERT INTO students_account
        (email,pwd)
VALUES ('kavita.123@gmail.com', 'password@1');
INSERT INTO students_account
        (email,pwd)
VALUES ('franklin.123@gmail.com', 'password@1');
INSERT INTO students_account
        (email,pwd)
VALUES ('simeon.123@gmail.com', 'password@1');
INSERT INTO students_account
        (email,pwd)
VALUES ('brolin123@gmail.com', 'password@1');
INSERT INTO students_account
        (email,pwd)
VALUES ('emeka123@gmail.com', 'password@1');


INSERT INTO students
    (student_account_id,full_name,cohort,passing_year,email,mobile,professional_interest,gender)
VALUES
    (1,'Kavita Patil', 'West Midlands', '2023-03-31','kavita.123@gmail.com',079826308100,'Fullstack Developer','female');
INSERT INTO students
    (student_account_id,full_name,cohort,passing_year,email,mobile,professional_interest,gender)
VALUES
    (2,'Franklin', 'West Midlands', '2023-03-31','franklin.123@gmail.com',079826308200,'Frontend Developer','male');
INSERT INTO students
    (student_account_id,full_name,cohort,passing_year,email,mobile,professional_interest,gender)
VALUES
    (3,'Simeon', 'West Midlands', '2023-03-31','simeon.123@gmail.com',079826308300,'Fullstack Developer','male');
INSERT INTO students
    (student_account_id,full_name,cohort,passing_year,email,mobile,professional_interest,gender)
VALUES
    (4,'Brolin', 'West Midlands', '2023-03-31','brolin123@gmail.com',079826308400,'Frontend Developer','male');
INSERT INTO students
    (student_account_id,full_name,cohort,passing_year,email,mobile,professional_interest,gender)
VALUES
    (5,'Emeka', 'West Midlands', '2023-03-31','emeka123@gmail.com',079826308500,'Frontend Developer','male');


INSERT INTO skills
    (student_id, skill)
VALUES
    (1, 'HTML5');
INSERT INTO skills
    (student_id, skill)
VALUES
    (1, 'CSS');
INSERT INTO skills
    (student_id, skill)
VALUES
    (1, 'JAVASCRIPT');
INSERT INTO skills
    (student_id, skill)
VALUES
    (1, 'NODE');

INSERT INTO skills
    (student_id, skill)
VALUES
    (2, 'HTML5');
INSERT INTO skills
    (student_id, skill)
VALUES
    (2, 'CSS');
INSERT INTO skills
    (student_id, skill)
VALUES
    (2, 'JAVASCRIPT');
INSERT INTO skills
    (student_id, skill)
VALUES
    (2, 'NODE');

INSERT INTO skills
    (student_id, skill)
VALUES
    (3, 'HTML5');
INSERT INTO skills
    (student_id, skill)
VALUES
    (3, 'CSS');
INSERT INTO skills
    (student_id, skill)
VALUES
    (3, 'JAVASCRIPT');
INSERT INTO skills
    (student_id, skill)
VALUES
    (3, 'NODE'); 

INSERT INTO skills
    (student_id, skill)
VALUES
    (4, 'HTML5');
INSERT INTO skills
    (student_id, skill)
VALUES
    (4, 'CSS');
INSERT INTO skills
    (student_id, skill)
VALUES
    (4, 'JAVASCRIPT');
INSERT INTO skills
    (student_id, skill)
VALUES
    (4, 'NODE');  

INSERT INTO skills
    (student_id, skill)
VALUES
    (5, 'HTML5');
INSERT INTO skills
    (student_id, skill)
VALUES
    (5, 'CSS');
INSERT INTO skills
    (student_id, skill)
VALUES
    (5, 'JAVASCRIPT');
INSERT INTO skills
    (student_id, skill)
VALUES
    (5, 'NODE');      

INSERT INTO student_url
    (student_id, link)
VALUES
    (1, 'https://github.com/kavitapatil'); 
INSERT INTO student_url
    (student_id, link)
VALUES
    (1, 'https://www.linkedin.com/in/kavitapatil-5bb76423a'); 
INSERT INTO student_url
    (student_id, link)
VALUES
    (2, 'https://github.com/franklin'); 
INSERT INTO student_url
    (student_id, link)
VALUES
    (2, 'https://www.linkedin.com/in/franklin-5bb76423a'); 

INSERT INTO student_url
    (student_id, link)
VALUES
    (3, 'https://github.com/simeon'); 
INSERT INTO student_url
    (student_id, link)
VALUES
    (3, 'https://www.linkedin.com/in/simeon-5bb76423a');

INSERT INTO student_url
    (student_id, link)
VALUES
    (4, 'https://github.com/brolin'); 
INSERT INTO student_url
    (student_id, link)
VALUES
    (4, 'https://www.linkedin.com/in/brolin-5bb76423a'); 

INSERT INTO student_url
    (student_id, link)
VALUES
    (5, 'https://github.com/emeka');    
INSERT INTO student_url
    (student_id, link)
VALUES
    (5, 'https://www.linkedin.com/in/emeka-5bb76423a');                           






