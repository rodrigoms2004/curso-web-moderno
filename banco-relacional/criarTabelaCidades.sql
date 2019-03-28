CREATE TABLE IF NOT EXISTS cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    estado_id int unsigned NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);

-- CREATE TABLE IF NOT EXISTS teste (
--     id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
-- );

-- insert into teste values();
-- insert into teste (id) values(1000);
-- insert into teste (id) values(1001);

-- select * from teste;

-- delete from teste where id >= 1000;

-- DROP TABLE IF EXISTS teste;