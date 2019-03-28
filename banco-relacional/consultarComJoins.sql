
-- BUG DO PLUG IN: não volta colunas com mesmo nome, mesmo em diferentes tabelas

select * from prefeitos;
select * from cidades;

-- cidades associadas a prefeitos
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;
-- id, 	nome, 		estado_id, 	area, 		id, 	nome, 				cidade_id
-- '2', 	'Niterói', 	'28', 		'133.90', 	'1', 	'Rodrigo Neves', 	'2'
-- '3', 	'Caruaru', 	'26', 		'920.60', 	'2', 	'Raquel Lyra', 		'3'

-- cidades associadas a prefeitos + cidades NÃO ASSOCIADAS a prefeitos
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id;
-- id,   nome,                   estado_id,  area,       id,     nome,               cidade_id
-- '2',  'Niterói',              '28',       '133.90',   '1',    'Rodrigo Neves',     '2'
-- '3',  'Caruaru',              '26',       '920.60',   '2',    'Raquel Lyra',       '3'
-- '1',  'Campinas',             '34',       '795.00',   NULL,   NULL,               NULL
-- '4',  'Juazeiro do Norte',    '15',       '248.20',   NULL,   NULL,               NULL

-- cidades associadas a prefeitos + prefeitos NÃO ASSOCIADOS a cidades
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
-- id,  nome,       estado_id,  area,       id,     nome,               cidade_id
-- '2', 'Niterói',  '28',       '133.90',   '1',    'Rodrigo Neves',    '2'
-- '3', 'Caruaru',  '26',       '920.60',   '2',    'Raquel Lyra',      '3'
-- NULL, NULL,      NULL,       NULL,       '3',    'Zenaldo Coutinho',  NULL
-- NULL, NULL,      NULL,       NULL,       '4',    'Rafael Greca',      NULL

-- Não suportado no MYSQL!
-- select * from cidades c full join prefeitos p on c.id = p.cidade_id;

-- UNION = FULL JOIN
-- cidades associadas a prefeitos, cidades não associadas a prefeitos,
-- prefeitos não associados a cidades 
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
-- id,  nome,                   estado_id,  area,       id,     nome,               cidade_id
-- '2', 'Niterói',              '28',       '133.90',   '1',    'Rodrigo Neves',    '2'
-- '3', 'Caruaru',              '26',       '920.60',   '2',    'Raquel Lyra',      '3'
-- '1', 'Campinas',             '34',       '795.00',   NULL,   NULL,               NULL
-- '4', 'Juazeiro do Norte',    '15',       '248.20',   NULL,   NULL,               NULL
-- NULL , NULL,                 NULL,       NULL,       '3',    'Zenaldo Coutinho', NULL
-- NULL , NULL,                 NULL,       NULL,       '4',    'Rafael Greca',     NULL

-- UNION ALL = FULL JOIN com duplicatas
-- cidades associadas a prefeitos, cidades não associadas a prefeitos,
-- prefeitos associados a cidades, prefeitos não associados a cidades 
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union all
select * from cidades c right join prefeitos p on c.id = p.cidade_id;
-- id,  nome,                   estado_id,  area,       id,     nome,               cidade_id
-- '2', 'Niterói', 				'28', 		'133.90', 	'1', 	'Rodrigo Neves', 	'2'
-- '3', 'Caruaru', 				'26', 		'920.60', 	'2', 	'Raquel Lyra', 		'3'
-- '1', 'Campinas', 			'34', 		'795.00', 	NULL, 	NULL, 				NULL
-- '4', 'Juazeiro do Norte', 	'15', 		'248.20', 	NULL, 	NULL, 				NULL
-- '2', 'Niterói', 				'28', 		'133.90', 	'1', 	'Rodrigo Neves', 	'2'
-- '3', 'Caruaru', 				'26', 		'920.60', 	'2', 	'Raquel Lyra', 		'3'
-- NULL, NULL, 					NULL, 		NULL, 		'3', 	'Zenaldo Coutinho', NULL
-- NULL, NULL, 					NULL, 		NULL, 		'4', 	'Rafael Greca', 	NULL
