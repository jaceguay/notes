1. Crie estrutura(s) para armazenar as informações: usuários do sistema (identificados por seu nome de usuário, nome, e-mail, número de telefone); mensagens transmitidas, contendo todas as informações para tratá-la (ex. remetente, destinatário, data e hora, localização, conteúdo da mensagem, tipo da mensagem (áudio, vídeo, texto), origem (APP, Web)).
```bash
CREATE KEYSPACE teste
    WITH replication = {'class': 'SimpleStrategy', 'replication_factor': 1};

CREATE TABLE teste.menssagens_ASC (
    login text,
    nome text,
    email text,
    telefone text,
    login_dest text,
    data timestamp,
    localizacao text,
    conteudo text,
    tipo text,
    origem text,
    PRIMARY KEY ( (login),data )
)WITH CLUSTERING ORDER BY (data ASC);
```
2. e 3. Carga de dados: Faça uma instrução CQL que insira 6 usuários no banco de dados Cassandra.
Carga de dados: Escreva uma instrução CQL que insira ao menos 20 mensagens no banco de dado Cassandra. Estas mensagens devem contemplar todos os contatos registrados. Inclua mensagens de todos os tipos e origens.
```python
from random import randint

inserir = []
for x in range(20):
    inserir.append('INSERT INTO tabela_asc ' +
                   '(login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES (' +
                   repr(pessoas[randint(0, 5)]['login']) + ', ' +
                   repr(menssagens[randint(0, 11)]['data']) + ', ' +
                   repr(menssagens[randint(0, 11)]['conteudo']) + ', ' +
                   repr(pessoas[randint(0, 5)]['email']) + ', ' +
                   repr(menssagens[randint(0, 11)]['localizacao']) + ', ' +
                   repr(pessoas[randint(0, 5)]['login']) + ', ' +
                   repr(pessoas[randint(0, 5)]['nome']) + ', ' +
                   repr(menssagens[randint(0, 11)]['origem']) + ', ' +
                   repr(pessoas[randint(0, 5)]['telefone']) + ', ' +
                   repr(menssagens[randint(0, 11)]['tipo']) +
                   ');')

print("BEGIN BATCH\n{}\nAPPLY BATCH;".format('\n'.join(inserir)))
```
Cassandra cqlsh:
```bash
BEGIN BATCH
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-07-21', 'Boa noite!', 'mjua@gmail.com', 'Brusque', 'maria', 'Mário Costa', 'APP', '(47)99999-9999', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('julia', '2019-12-11', 'Bom dia!', 'maco@gmail.com', 'Blumenau', 'julia', 'Maria José', 'APP', '(47)93339-3387', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('mario', '2019-01-09', 'Jantar está cancelado', 'ririta@gmail.com', 'Blumenau', 'maria', 'Rita Pereira', 'Web', '(47)93339-3387', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('rita', '2019-01-11', 'Pode comprar 1kg', 'joao@gmail.com', 'Brusque', 'paulo', 'Júlia José', 'Web', '(47)97789-8888', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('julia', '2019-06-10', 'Reunião às 14:00hrs', 'mjua@gmail.com', 'Itajaí', 'rita', 'Rita Pereira', 'APP', '(47)98989-8787', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-02-20', 'Boa noite!', 'mjua@gmail.com', 'Itajaí', 'paulo', 'Joao da Silva', 'Web', '(47)98944-8337', 'áudio');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-07-21', 'Lavação carro 12:00hrs', 'mjua@gmail.com', 'Blumenau', 'rita', 'Júlia José', 'APP', '(47)93339-3387', 'áudio');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-03-28', 'Bom dia!', 'ririta@gmail.com', 'Blumenau', 'paulo', 'Mário Costa', 'Web', '(47)99999-9999', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('julia', '2019-04-02', 'Reunião às 14:00hrs', 'maco@gmail.com', 'Blumenau', 'rita', 'Júlia José', 'APP', '(47)98989-8787', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('julia', '2019-01-09', 'Pagar conta de luz', 'pr@gmail.com', 'Blumenau', 'paulo', 'Maria José', 'Web', '(47)98944-8337', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-12-11', 'Lavação carro 12:00hrs', 'mjua@gmail.com', 'Brusque', 'mario', 'Mário Costa', 'Web', '(47)99999-9999', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('rita', '2019-01-11', 'Esquecesse o casaco', 'maco@gmail.com', 'Blumenau', 'mario', 'Júlia José', 'Web', '(47)97789-8888', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-05-07', 'Boa noite!', 'maco@gmail.com', 'Gaspar', 'joao', 'Maria José', 'Web', '(47)93339-3387', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-05-07', 'Bom dia!', 'joao@gmail.com', 'Itajaí', 'mario', 'Joao da Silva', 'Web', '(47)98989-8787', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-04-02', 'Esquecesse o casaco', 'joao@gmail.com', 'Gaspar', 'maria', 'Joao da Silva', 'Web', '(47)93339-3387', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('joao', '2019-01-11', 'Reunião às 14:00hrs', 'mjua@gmail.com', 'Brusque', 'paulo', 'Joao da Silva', 'Web', '(47)93389-2227', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-07-10', 'Lavação carro 12:00hrs', 'ririta@gmail.com', 'Itajaí', 'paulo', 'Mário Costa', 'Web', '(47)97789-8888', 'áudio');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('julia', '2019-06-10', 'Buscar filho no aeroporto', 'ririta@gmail.com', 'Itajaí', 'julia', 'Rita Pereira', 'Web', '(47)98989-8787', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('mario', '2019-11-19', 'Reunião às 14:00hrs', 'maria@gmail.com', 'Navegantes', 'joao', 'Mário Costa', 'Web', '(47)93339-3387', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-12-11', 'Lavação carro 12:00hrs', 'joao@gmail.com', 'Brusque', 'joao', 'Maria José', 'Web', '(47)98944-8337', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-12-11', 'Boa noite!', 'maco@gmail.com', 'Navegantes', 'paulo', 'Júlia José', 'Web', '(47)99999-9999', 'texto');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('joao', '2019-12-11', 'Pagar conta de luz', 'pr@gmail.com', 'Itajaí', 'rita', 'Maria José', 'Web', '(47)93389-2227', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('julia', '2019-04-02', 'Pagar conta de luz', 'maria@gmail.com', 'Blumenau', 'rita', 'Rita Pereira', 'Web', '(47)98989-8787', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('joao', '2019-11-19', 'Boa noite!', 'joao@gmail.com', 'Gaspar', 'maria', 'Maria José', 'APP', '(47)93389-2227', 'vídeo');
INSERT INTO menssagens_ASC (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-11-19', 'Bom dia!', 'maco@gmail.com', 'Brusque', 'mario', 'Maria José', 'APP', '(47)93389-2227', 'áudio');
APPLY BATCH;
```
Select
```bash
SELECT * FROM menssagens_ASC;
 login | data                            | conteudo               | email            | localizacao | login_dest | nome          | origem | telefone       | tipo
-------+---------------------------------+------------------------+------------------+-------------+------------+---------------+--------+----------------+-------
 paulo | 2019-03-28 00:00:00.000000+0000 |               Bom dia! | ririta@gmail.com |    Blumenau |      paulo |   Mário Costa |    Web | (47)99999-9999 | vídeo
 paulo | 2019-05-07 00:00:00.000000+0000 |               Bom dia! |   joao@gmail.com |      Itajaí |      mario | Joao da Silva |    Web | (47)98989-8787 | texto
 paulo | 2019-11-19 00:00:00.000000+0000 |               Bom dia! |   maco@gmail.com |     Brusque |      mario |    Maria José |    APP | (47)93389-2227 | áudio
 paulo | 2019-12-11 00:00:00.000000+0000 | Lavação carro 12:00hrs |   joao@gmail.com |     Brusque |       joao |    Maria José |    Web | (47)98944-8337 | texto
 julia | 2019-01-09 00:00:00.000000+0000 |     Pagar conta de luz |     pr@gmail.com |    Blumenau |      paulo |    Maria José |    Web | (47)98944-8337 | texto
 julia | 2019-04-02 00:00:00.000000+0000 |    Reunião às 14:00hrs |  maria@gmail.com |    Blumenau |       rita |  Rita Pereira |    Web | (47)98989-8787 | vídeo
 julia | 2019-06-10 00:00:00.000000+0000 |    Reunião às 14:00hrs | ririta@gmail.com |      Itajaí |       rita |  Rita Pereira |    Web | (47)98989-8787 | texto
 julia | 2019-12-11 00:00:00.000000+0000 |               Bom dia! |   maco@gmail.com |    Blumenau |      julia |    Maria José |    APP | (47)93339-3387 | vídeo
 maria | 2019-02-20 00:00:00.000000+0000 |             Boa noite! |   mjua@gmail.com |      Itajaí |      paulo | Joao da Silva |    Web | (47)98944-8337 | áudio
 maria | 2019-04-02 00:00:00.000000+0000 |    Esquecesse o casaco |   joao@gmail.com |      Gaspar |      maria | Joao da Silva |    Web | (47)93339-3387 | vídeo
 maria | 2019-05-07 00:00:00.000000+0000 |             Boa noite! |   maco@gmail.com |      Gaspar |       joao |    Maria José |    Web | (47)93339-3387 | vídeo
 maria | 2019-07-10 00:00:00.000000+0000 | Lavação carro 12:00hrs | ririta@gmail.com |      Itajaí |      paulo |   Mário Costa |    Web | (47)97789-8888 | áudio
 maria | 2019-07-21 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |     Brusque |       rita |   Mário Costa |    APP | (47)99999-9999 | vídeo
 maria | 2019-12-11 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |  Navegantes |      paulo |   Mário Costa |    Web | (47)99999-9999 | vídeo
  rita | 2019-01-11 00:00:00.000000+0000 |       Pode comprar 1kg |   maco@gmail.com |     Brusque |      paulo |    Júlia José |    Web | (47)97789-8888 | vídeo
  joao | 2019-01-11 00:00:00.000000+0000 |    Reunião às 14:00hrs |   mjua@gmail.com |     Brusque |      paulo | Joao da Silva |    Web | (47)93389-2227 | vídeo
  joao | 2019-11-19 00:00:00.000000+0000 |             Boa noite! |   joao@gmail.com |      Gaspar |      maria |    Maria José |    APP | (47)93389-2227 | vídeo
  joao | 2019-12-11 00:00:00.000000+0000 |     Pagar conta de luz |     pr@gmail.com |      Itajaí |       rita |    Maria José |    Web | (47)93389-2227 | vídeo
 mario | 2019-01-09 00:00:00.000000+0000 |  Jantar está cancelado | ririta@gmail.com |    Blumenau |      maria |  Rita Pereira |    Web | (47)93339-3387 | vídeo
 mario | 2019-11-19 00:00:00.000000+0000 |    Reunião às 14:00hrs |  maria@gmail.com |  Navegantes |       joao |   Mário Costa |    Web | (47)93339-3387 | vídeo

(20 rows)
```
4. Escreva uma consulta que apresente a todas as mensagens já transmitidas por um determinado usuário.
```bash
SELECT * FROM menssagens_ASC WHERE login = 'maria';

 login | data                            | conteudo               | email            | localizacao | login_dest | nome          | origem | telefone       | tipo
-------+---------------------------------+------------------------+------------------+-------------+------------+---------------+--------+----------------+-------
 maria | 2019-02-20 00:00:00.000000+0000 |             Boa noite! |   mjua@gmail.com |      Itajaí |      paulo | Joao da Silva |    Web | (47)98944-8337 | áudio
 maria | 2019-04-02 00:00:00.000000+0000 |    Esquecesse o casaco |   joao@gmail.com |      Gaspar |      maria | Joao da Silva |    Web | (47)93339-3387 | vídeo
 maria | 2019-05-07 00:00:00.000000+0000 |             Boa noite! |   maco@gmail.com |      Gaspar |       joao |    Maria José |    Web | (47)93339-3387 | vídeo
 maria | 2019-07-10 00:00:00.000000+0000 | Lavação carro 12:00hrs | ririta@gmail.com |      Itajaí |      paulo |   Mário Costa |    Web | (47)97789-8888 | áudio
 maria | 2019-07-21 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |     Brusque |       rita |   Mário Costa |    APP | (47)99999-9999 | vídeo
 maria | 2019-12-11 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |  Navegantes |      paulo |   Mário Costa |    Web | (47)99999-9999 | vídeo

(6 rows)
```
5. Escreva uma consulta que apresente a todas as mensagens já transmitidas por um determinado usuário, ordenadas pelo receptor das mensagens.
```bash
CREATE MATERIALIZED VIEW usrecepA AS
    SELECT * FROM menssagens_ASC
    WHERE login IS NOT NULL AND login_dest IS NOT NULL AND data IS NOT NULL
    PRIMARY KEY ((login), login_dest, data)
    WITH CLUSTERING ORDER BY (login_dest ASC);
    
SELECT * FROM usrecepA WHERE login IN ('maria') ORDER BY login_dest ASC ALLOW FILTERING;

 login | login_dest | data                            | conteudo               | email            | localizacao | nome          | origem | telefone       | tipo
-------+------------+---------------------------------+------------------------+------------------+-------------+---------------+--------+----------------+-------
 maria |       joao | 2019-01-11 00:00:00.000000+0000 |    Reunião às 14:00hrs |  maria@gmail.com |    Blumenau |   Mário Costa |    Web | (47)93339-3387 | vídeo
 maria |       joao | 2019-05-07 00:00:00.000000+0000 |             Boa noite! |   maco@gmail.com |      Gaspar |    Maria José |    Web | (47)93339-3387 | vídeo
 maria |      julia | 2019-06-10 00:00:00.000000+0000 |       Pode comprar 1kg |   mjua@gmail.com |      Itajaí | Joao da Silva |    Web | (47)97789-8888 | texto
 maria |      maria | 2019-04-02 00:00:00.000000+0000 |    Esquecesse o casaco |   joao@gmail.com |      Gaspar | Joao da Silva |    Web | (47)93339-3387 | vídeo
 maria |      maria | 2019-07-02 00:00:00.000000+0000 | Lavação carro 12:00hrs | ririta@gmail.com |    Blumenau | Paulo Roberto |    Web | (47)97789-8888 | vídeo
 maria |      paulo | 2019-07-10 00:00:00.000000+0000 | Lavação carro 12:00hrs | ririta@gmail.com |      Itajaí |   Mário Costa |    Web | (47)97789-8888 | áudio
 maria |      paulo | 2019-12-11 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |  Navegantes |   Mário Costa |    Web | (47)99999-9999 | vídeo
 maria |       rita | 2019-02-20 00:00:00.000000+0000 |     Pagar conta de luz |   mjua@gmail.com |      Itajaí | Paulo Roberto |    Web | (47)98989-8787 | vídeo
 maria |       rita | 2019-07-21 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |     Brusque |   Mário Costa |    APP | (47)99999-9999 | vídeo
 maria |       rita | 2019-11-19 00:00:00.000000+0000 |    Esquecesse o casaco |  maria@gmail.com |      Itajaí |    Júlia José |    Web | (47)99999-9999 | texto

(10 rows)
```
6. Escreva uma consulta que retorne apenas os usuários do aplicativo que já enviaram alguma mensagem pela Web.
```bash
SELECT * FROM menssagens_ASC WHERE origem = 'Web' ALLOW FILTERING;


 login | data                            | conteudo               | email            | localizacao | login_dest | nome          | origem | telefone       | tipo
-------+---------------------------------+------------------------+------------------+-------------+------------+---------------+--------+----------------+-------
 paulo | 2019-03-28 00:00:00.000000+0000 |               Bom dia! | ririta@gmail.com |    Blumenau |      paulo |   Mário Costa |    Web | (47)99999-9999 | vídeo
 paulo | 2019-05-07 00:00:00.000000+0000 |               Bom dia! |   joao@gmail.com |      Itajaí |      mario | Joao da Silva |    Web | (47)98989-8787 | texto
 paulo | 2019-12-11 00:00:00.000000+0000 | Lavação carro 12:00hrs |   joao@gmail.com |     Brusque |       joao |    Maria José |    Web | (47)98944-8337 | texto
 julia | 2019-01-09 00:00:00.000000+0000 |     Pagar conta de luz |     pr@gmail.com |    Blumenau |      paulo |    Maria José |    Web | (47)98944-8337 | texto
 julia | 2019-04-02 00:00:00.000000+0000 |    Reunião às 14:00hrs |  maria@gmail.com |    Blumenau |       rita |  Rita Pereira |    Web | (47)98989-8787 | vídeo
 julia | 2019-06-10 00:00:00.000000+0000 |    Reunião às 14:00hrs | ririta@gmail.com |      Itajaí |       rita |  Rita Pereira |    Web | (47)98989-8787 | texto
 maria | 2019-02-20 00:00:00.000000+0000 |             Boa noite! |   mjua@gmail.com |      Itajaí |      paulo | Joao da Silva |    Web | (47)98944-8337 | áudio
 maria | 2019-04-02 00:00:00.000000+0000 |    Esquecesse o casaco |   joao@gmail.com |      Gaspar |      maria | Joao da Silva |    Web | (47)93339-3387 | vídeo
 maria | 2019-05-07 00:00:00.000000+0000 |             Boa noite! |   maco@gmail.com |      Gaspar |       joao |    Maria José |    Web | (47)93339-3387 | vídeo
 maria | 2019-07-10 00:00:00.000000+0000 | Lavação carro 12:00hrs | ririta@gmail.com |      Itajaí |      paulo |   Mário Costa |    Web | (47)97789-8888 | áudio
 maria | 2019-12-11 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |  Navegantes |      paulo |   Mário Costa |    Web | (47)99999-9999 | vídeo
  rita | 2019-01-11 00:00:00.000000+0000 |       Pode comprar 1kg |   maco@gmail.com |     Brusque |      paulo |    Júlia José |    Web | (47)97789-8888 | vídeo
  joao | 2019-01-11 00:00:00.000000+0000 |    Reunião às 14:00hrs |   mjua@gmail.com |     Brusque |      paulo | Joao da Silva |    Web | (47)93389-2227 | vídeo
  joao | 2019-12-11 00:00:00.000000+0000 |     Pagar conta de luz |     pr@gmail.com |      Itajaí |       rita |    Maria José |    Web | (47)93389-2227 | vídeo
 mario | 2019-01-09 00:00:00.000000+0000 |  Jantar está cancelado | ririta@gmail.com |    Blumenau |      maria |  Rita Pereira |    Web | (47)93339-3387 | vídeo
 mario | 2019-11-19 00:00:00.000000+0000 |    Reunião às 14:00hrs |  maria@gmail.com |  Navegantes |       joao |   Mário Costa |    Web | (47)93339-3387 | vídeo

(16 rows)
```
7. Escreva uma consulta que retorne apenas os usuários do aplicativo que já receberam alguma mensagem que foi envida pelo APP (não pela Web).
```bash
SELECT * FROM menssagens_ASC WHERE origem = 'APP' ALLOW FILTERING;
 login | data                            | conteudo               | email          | localizacao | login_dest | nome        | origem | telefone       | tipo
-------+---------------------------------+------------------------+----------------+-------------+------------+-------------+--------+----------------+-------
 paulo | 2019-11-19 00:00:00.000000+0000 |               Bom dia! | maco@gmail.com |     Brusque |      mario |  Maria José |    APP | (47)93389-2227 | áudio
 julia | 2019-12-11 00:00:00.000000+0000 |               Bom dia! | maco@gmail.com |    Blumenau |      julia |  Maria José |    APP | (47)93339-3387 | vídeo
 maria | 2019-07-21 00:00:00.000000+0000 | Lavação carro 12:00hrs | mjua@gmail.com |     Brusque |       rita | Mário Costa |    APP | (47)99999-9999 | vídeo
  joao | 2019-11-19 00:00:00.000000+0000 |             Boa noite! | joao@gmail.com |      Gaspar |      maria |  Maria José |    APP | (47)93389-2227 | vídeo
(4 rows)
```
8. Escreva uma consulta que retorne as 10 últimas mensagens recebidas por um usuário, ordenado em ordem decrescente.
```bash
CREATE MATERIALIZED VIEW usuariodatadesc AS
    SELECT * FROM menssagens_ASC
    WHERE login IS NOT NULL AND data IS NOT NULL
    PRIMARY KEY (login, data)
    WITH CLUSTERING ORDER BY (data DESC);
    
SELECT * FROM usuariodatadesc WHERE login = 'maria' ORDER BY data DESC LIMIT 10 ALLOW FILTERING;

 login | data                            | conteudo               | email            | localizacao | login_dest | nome          | origem | telefone       | tipo
-------+---------------------------------+------------------------+------------------+-------------+------------+---------------+--------+----------------+-------
 maria | 2019-12-11 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |  Navegantes |      paulo |   Mário Costa |    Web | (47)99999-9999 | vídeo
 maria | 2019-11-19 00:00:00.000000+0000 |    Esquecesse o casaco |  maria@gmail.com |      Itajaí |       rita |    Júlia José |    Web | (47)99999-9999 | texto
 maria | 2019-07-21 00:00:00.000000+0000 | Lavação carro 12:00hrs |   mjua@gmail.com |     Brusque |       rita |   Mário Costa |    APP | (47)99999-9999 | vídeo
 maria | 2019-07-10 00:00:00.000000+0000 | Lavação carro 12:00hrs | ririta@gmail.com |      Itajaí |      paulo |   Mário Costa |    Web | (47)97789-8888 | áudio
 maria | 2019-07-02 00:00:00.000000+0000 | Lavação carro 12:00hrs | ririta@gmail.com |    Blumenau |      maria | Paulo Roberto |    Web | (47)97789-8888 | vídeo
 maria | 2019-06-10 00:00:00.000000+0000 |       Pode comprar 1kg |   mjua@gmail.com |      Itajaí |      julia | Joao da Silva |    Web | (47)97789-8888 | texto
 maria | 2019-05-07 00:00:00.000000+0000 |             Boa noite! |   maco@gmail.com |      Gaspar |       joao |    Maria José |    Web | (47)93339-3387 | vídeo
 maria | 2019-04-02 00:00:00.000000+0000 |    Esquecesse o casaco |   joao@gmail.com |      Gaspar |      maria | Joao da Silva |    Web | (47)93339-3387 | vídeo
 maria | 2019-02-20 00:00:00.000000+0000 |     Pagar conta de luz |   mjua@gmail.com |      Itajaí |       rita | Paulo Roberto |    Web | (47)98989-8787 | vídeo
 maria | 2019-01-11 00:00:00.000000+0000 |    Reunião às 14:00hrs |  maria@gmail.com |    Blumenau |       joao |   Mário Costa |    Web | (47)93339-3387 | vídeo

(10 rows)
```
9. Dados dois usuários do aplicativo, escreva uma consulta que apresente apenas as mensagens transmitidas entre eles, ordenando-as pela data da mensagem (decrescente).
```bash
CREATE MATERIALIZED VIEW usuarioReceptor AS
    SELECT * FROM menssagens_ASC
    WHERE login IS NOT NULL AND login_dest IS NOT NULL AND data IS NOT NULL
    PRIMARY KEY (login_dest, login, data)
    WITH CLUSTERING ORDER BY (data DESC);

SELECT * FROM usuarioReceptor WHERE login in ('maria', 'joao') AND login_dest  in ('joao','maria') ALLOW FILTERING;

 login_dest | login | data                            | conteudo                  | email            | localizacao | nome          | origem | telefone       | tipo
------------+-------+---------------------------------+---------------------------+------------------+-------------+---------------+--------+----------------+-------
       joao |  joao | 2019-12-11 00:00:00.000000+0000 | Buscar filho no aeroporto |  maria@gmail.com |     Brusque |  Rita Pereira |    APP | (47)93389-2227 | vídeo
       joao | maria | 2019-05-07 00:00:00.000000+0000 |                Boa noite! |   maco@gmail.com |      Gaspar |    Maria José |    Web | (47)93339-3387 | vídeo
       joao | maria | 2019-01-11 00:00:00.000000+0000 |       Reunião às 14:00hrs |  maria@gmail.com |    Blumenau |   Mário Costa |    Web | (47)93339-3387 | vídeo
      maria |  joao | 2019-11-19 00:00:00.000000+0000 |                Boa noite! |   joao@gmail.com |      Gaspar |    Maria José |    APP | (47)93389-2227 | vídeo
      maria |  joao | 2019-02-20 00:00:00.000000+0000 |    Lavação carro 12:00hrs |     pr@gmail.com |     Brusque |    Júlia José |    APP | (47)97789-8888 | vídeo
      maria |  joao | 2019-01-11 00:00:00.000000+0000 | Buscar filho no aeroporto |     pr@gmail.com |     Brusque |    Júlia José |    Web | (47)99999-9999 | áudio
      maria | maria | 2019-07-02 00:00:00.000000+0000 |    Lavação carro 12:00hrs | ririta@gmail.com |    Blumenau | Paulo Roberto |    Web | (47)97789-8888 | vídeo
      maria | maria | 2019-04-02 00:00:00.000000+0000 |       Esquecesse o casaco |   joao@gmail.com |      Gaspar | Joao da Silva |    Web | (47)93339-3387 | vídeo

(8 rows)
```
10. Relacione o nome de todos os usuários ordenados pela data de última mensagem transmitida pelo sistema.
```bash
SELECT login, MAX(data) FROM menssagens_ASC GROUP BY login;

 login | system.max(data)
-------+---------------------------------
 paulo | 2019-12-11 00:00:00.000000+0000
 julia | 2019-12-11 00:00:00.000000+0000
 maria | 2019-12-11 00:00:00.000000+0000
  rita | 2019-12-11 00:00:00.000000+0000
  joao | 2019-12-11 00:00:00.000000+0000
 mario | 2019-11-19 00:00:00.000000+0000

(6 rows)
```
11.  Relacione todas as mensagens de vídeo recebidas por um determinado usuário. 
```bash
SELECT * FROM menssagens_ASC WHERE login = 'joao' AND tipo = 'vídeo' ALLOW FILTERING;

 login | data                            | conteudo                  | email            | localizacao | login_dest | nome         | origem | telefone       | tipo
-------+---------------------------------+---------------------------+------------------+-------------+------------+--------------+--------+----------------+-------
  joao | 2019-02-20 00:00:00.000000+0000 |    Lavação carro 12:00hrs |     pr@gmail.com |     Brusque |      maria |   Júlia José |    APP | (47)97789-8888 | vídeo
  joao | 2019-07-10 00:00:00.000000+0000 |        Pagar conta de luz | ririta@gmail.com |    Blumenau |      julia |   Maria José |    Web | (47)97789-8888 | vídeo
  joao | 2019-07-21 00:00:00.000000+0000 |       Esquecesse o casaco |     pr@gmail.com |  Navegantes |       rita | Rita Pereira |    Web | (47)97789-8888 | vídeo
  joao | 2019-11-19 00:00:00.000000+0000 |                Boa noite! |   joao@gmail.com |      Gaspar |      maria |   Maria José |    APP | (47)93389-2227 | vídeo
  joao | 2019-12-11 00:00:00.000000+0000 | Buscar filho no aeroporto |  maria@gmail.com |     Brusque |       joao | Rita Pereira |    APP | (47)93389-2227 | vídeo

(5 rows)
```
