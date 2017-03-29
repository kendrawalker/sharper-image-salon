
DROP TABLE IF EXISTS customer_requests;
DROP TABLE IF EXISTS profile_pics;


CREATE TABLE customer_requests (
    id SERIAL primary key,
    first_name VARCHAR(250) not null,
    last_name VARCHAR(250) not null,
    email_address VARCHAR(250) UNIQUE not null,
    note TEXT,
    gender VARCHAR(250),
    phone_number VARCHAR(250),
);


CREATE TABLE profile_pics (
    id SERIAL primary key,
    user_id INTEGER not null,
    profile_pic TEXT not null
);
