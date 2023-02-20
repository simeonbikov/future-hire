drop table if exists skills;
drop table if exists graduates;
drop table if exists graduates_account;

CREATE TABLE graduates_account 
(
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) NOT NULL,
    pwd VARCHAR(20) NOT NULL
);

CREATE TABLE graduates 
(
    id SERIAL PRIMARY KEY,
    graduate_account_id INT REFERENCES graduates_account(id),
    full_name VARCHAR(120) NOT NULL,
    cohort VARCHAR(200) NOT NULL,
    passing_year VARCHAR(10) NOT NULL,
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
    graduate_id INT REFERENCES graduates(id),
    skill VARCHAR(50) NOT NULL
);





                      






