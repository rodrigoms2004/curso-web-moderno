
-- relação 1 para 1 com a tabela cidades
-- a chave estrangeira cidade_id não se duplica na tabela prefeitos
-- cidade_id pode ser nula, um prefeito pode não estar associado a uma cidade
CREATE TABLE IF NOT EXISTS prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id int unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);