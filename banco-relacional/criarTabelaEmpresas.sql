-- campo cnpj não pode ser duplicado e não nulo
CREATE TABLE IF NOT EXISTS empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int unsigned,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

-- tabela auxiliar que permite o relacionamento N para M entre 
-- as tabelas cidades e empresas
-- cidades_empresas
CREATE TABLE IF NOT EXISTS empresas_unidades (
    empresa_id INT UNSIGNED NOT NULL,
    cidade_id INT UNSIGNED NOT NULL,
    sede TINYINT(1) NOT NULL,                   -- 1 = é sede, 0 = não é sede
    PRIMARY KEY (empresa_id, cidade_id)
);