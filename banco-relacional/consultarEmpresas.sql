select 
    e.nome as Empresa, 
    c.nome as Cidade
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id;

-- Retorna somente as sedes (sede = 1)
select 
    e.nome as Empresa, 
    c.nome as Cidade
from empresas e, empresas_unidades eu, cidades c
where e.id = eu.empresa_id
and c.id = eu.cidade_id and sede;