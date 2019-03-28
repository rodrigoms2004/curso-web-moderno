ALTER TABLE empresas MODIFY cnpj VARCHAR(14);

INSERT INTO empresas
    (nome, cnpj)
VALUES
    ('Bradesco', 95694186000132),
    ('Vale', 27887148000146),
    ('Cielo', 01598317000134);


desc empresas;      -- descreve o conteúdo da tabelas
desc prefeitos;
select * from empresas;
select * from cidades;

INSERT INTO empresas_unidades
    (empresa_id, cidade_id, sede)
VALUES
    (1, 1, 1),              -- 1 Bradesco,  1 Campinas, 1 é sede
    (1, 2, 0),              -- 1 Bradesco,  2 Niterói,  0 não é sede
    (2, 1, 0),              -- 2 Vale,      1 Campinas, 0 não é sede
    (2, 2, 1);              -- 2 Vale,      2 Niterói,  1 é sede

select * from empresas_unidades;

select 
    emp.nome as Empresa,
    emp.cnpj as CNPJ,
    
    cid.nome as Cidade,
    cid.area as Area,
    
    emp_un.sede as Sede,

    est.nome as Estado,
    est.regiao as Região,
    est.populacao as População,
    
    pre.nome as Prefeito

from empresas_unidades emp_un
inner join empresas emp on emp.id = emp_un.empresa_id   
inner join cidades cid on cid.id = emp_un.cidade_id    
inner join estados est on est.id = cid.estado_id
left join prefeitos pre on pre.cidade_id = cid.id;  -- cidades com ou sem prefeitos