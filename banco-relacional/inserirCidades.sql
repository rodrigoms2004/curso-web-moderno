select * from estados where id = 25;
select * from estados;

select * from cidades;

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Campinas', 795, 31);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Niterói', 133.9, 25);

INSERT INTO cidades 
    (nome, area, estado_id)
VALUES (
    'Caruaru',
    920.6,
    (select id from estados where sigla = 'PE')
)

INSERT INTO cidades
    (nome, area, estado_id)
VALUES (
    'Juazeiro do Norte',
    248.2,
    (select id from estados where sigla = 'CE')
)


update cidades
    set estado_id = 34
where nome = 'Campinas';

update cidades
    set estado_id = 28
where nome = 'Niteroi';

select 
    cid.nome, 
    cid.area, 
    est.sigla
from cidades cid
inner join estados est on est.id = cid.estado_id;

