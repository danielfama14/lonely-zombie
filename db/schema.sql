DROP DATABASE IF EXISTS lonelyzombie_db;
CREATE DATABASE lonelyzombie_db;

USE lonelyzombie_db;

CREATE TABLE high_scores (
    id INT AUTO_INCREMENT PRIMARY KEY,
    player_name VARCHAR(255) NOT NULL,
    score INT NOT NULL
);