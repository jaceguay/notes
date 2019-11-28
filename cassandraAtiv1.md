```python
from random import randint

pessoas = [
    {
        'login': 'joao',
        'nome': 'Joao da Silva',
        'email': 'joao@gmail.com',
        'telefone': '(47)99999-9999'
    },
    {
        'login': 'maria',
        'nome': 'Maria José',
        'email': 'maria@gmail.com',
        'telefone': '(47)98989-8787'
    },
    {
        'login': 'paulo',
        'nome': 'Paulo Roberto',
        'email': 'pr@gmail.com',
        'telefone': '(47)97789-8888'
    },
    {
        'login': 'mario',
        'nome': 'Mário Costa',
        'email': 'maco@gmail.com',
        'telefone': '(47)98944-8337'
    },
    {
        'login': 'julia',
        'nome': 'Júlia José',
        'email': 'mjua@gmail.com',
        'telefone': '(47)93339-3387'
    },
    {
        'login': 'rita',
        'nome': 'Rita Pereira',
        'email': 'ririta@gmail.com',
        'telefone': '(47)93389-2227'
    }
]

menssagens = [
    {
        'data': '2019-11-19',
        'localizacao': 'Itajaí',
        'conteudo': 'Bom dia!',
        'tipo': 'texto',
        'origem': 'APP'
    },
    {
        'data': '2019-07-10',
        'localizacao': 'Blumenau',
        'conteudo': 'Esquecesse o casaco',
        'tipo': 'vídeo',
        'origem': 'Web'
    },
    {
        'data': '2019-01-11',
        'localizacao': 'Itajaí',
        'conteudo': 'Pode comprar 1kg',
        'tipo': 'áudio',
        'origem': 'Web'
    },
    {
        'data': '2019-02-20',
        'localizacao': 'Brusque',
        'conteudo': 'Reunião às 14:00hrs',
        'tipo': 'vídeo',
        'origem': 'APP'
    },
    {
        'data': '2019-05-07',
        'localizacao': 'Itajaí',
        'conteudo': 'Comprar leite!',
        'tipo': 'texto',
        'origem': 'Web'
    },
    {
        'data': '2019-03-28',
        'localizacao': 'Brusque',
        'conteudo': 'Jantar está cancelado',
        'tipo': 'vídeo',
        'origem': 'APP'
    },
    {
        'data': '2019-01-09',
        'localizacao': 'Blumenau',
        'conteudo': 'Boa noite!',
        'tipo': 'texto',
        'origem': 'Web'
    },
    {
        'data': '2019-07-02',
        'localizacao': 'Blumenau',
        'conteudo': 'Pagar conta de luz',
        'tipo': 'vídeo',
        'origem': 'Web'
    },
    {
        'data': '2019-12-11',
        'localizacao': 'Navegantes',
        'conteudo': 'Buscar filho no aeroporto',
        'tipo': 'áudio',
        'origem': 'Web'
    },
    {
        'data': '2019-06-10',
        'localizacao': 'Brusque',
        'conteudo': 'Reunião às 14:00hrs',
        'tipo': 'vídeo',
        'origem': 'APP'
    },
    {
        'data': '2019-04-02',
        'localizacao': 'Gaspar',
        'conteudo': 'Check-in 15:00hrs',
        'tipo': 'texto',
        'origem': 'Web'
    },
    {
        'data': '2019-07-21',
        'localizacao': 'Brusque',
        'conteudo': 'Lavação carro 12:00hrs',
        'tipo': 'texto',
        'origem': 'APP'
    }
]

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
```bash
BEGIN BATCH
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('joao', '2019-11-19', 'Check-in 15:00hrs', 'pr@gmail.com', 'Itajaí', 'julia', 'Joao da Silva', 'APP', '(47)93389-2227', 'vídeo');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-07-21', 'Buscar filho no aeroporto', 'maria@gmail.com', 'Navegantes', 'rita', 'Júlia José', 'Web', '(47)98989-8787', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('mario', '2019-07-10', 'Esquecesse o casaco', 'ririta@gmail.com', 'Itajaí', 'julia', 'Rita Pereira', 'Web', '(47)98944-8337', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-01-09', 'Reunião às 14:00hrs', 'joao@gmail.com', 'Brusque', 'maria', 'Mário Costa', 'Web', '(47)99999-9999', 'vídeo');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('mario', '2019-07-21', 'Reunião às 14:00hrs', 'maria@gmail.com', 'Brusque', 'paulo', 'Joao da Silva', 'Web', '(47)93389-2227', 'áudio');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('joao', '2019-11-19', 'Boa noite!', 'maco@gmail.com', 'Brusque', 'paulo', 'Mário Costa', 'Web', '(47)99999-9999', 'vídeo');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-01-09', 'Pode comprar 1kg', 'mjua@gmail.com', 'Brusque', 'mario', 'Júlia José', 'Web', '(47)97789-8888', 'áudio');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-07-02', 'Lavação carro 12:00hrs', 'ririta@gmail.com', 'Brusque', 'maria', 'Maria José', 'APP', '(47)93389-2227', 'vídeo');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-01-11', 'Jantar está cancelado', 'joao@gmail.com', 'Blumenau', 'maria', 'Rita Pereira', 'APP', '(47)97789-8888', 'vídeo');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-01-11', 'Esquecesse o casaco', 'joao@gmail.com', 'Navegantes', 'paulo', 'Joao da Silva', 'Web', '(47)98989-8787', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('rita', '2019-04-02', 'Pagar conta de luz', 'ririta@gmail.com', 'Blumenau', 'joao', 'Maria José', 'Web', '(47)98944-8337', 'vídeo');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-01-11', 'Lavação carro 12:00hrs', 'maria@gmail.com', 'Blumenau', 'maria', 'Maria José', 'APP', '(47)97789-8888', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-02-20', 'Jantar está cancelado', 'joao@gmail.com', 'Itajaí', 'paulo', 'Maria José', 'Web', '(47)93389-2227', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('rita', '2019-06-10', 'Bom dia!', 'pr@gmail.com', 'Blumenau', 'paulo', 'Rita Pereira', 'Web', '(47)93389-2227', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('mario', '2019-07-02', 'Lavação carro 12:00hrs', 'maco@gmail.com', 'Brusque', 'julia', 'Paulo Roberto', 'APP', '(47)98989-8787', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('rita', '2019-07-10', 'Boa noite!', 'maco@gmail.com', 'Itajaí', 'joao', 'Joao da Silva', 'APP', '(47)93389-2227', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('julia', '2019-05-07', 'Reunião às 14:00hrs', 'ririta@gmail.com', 'Itajaí', 'mario', 'Rita Pereira', 'APP', '(47)99999-9999', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('maria', '2019-12-11', 'Bom dia!', 'pr@gmail.com', 'Blumenau', 'maria', 'Maria José', 'Web', '(47)99999-9999', 'vídeo');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('mario', '2019-07-10', 'Buscar filho no aeroporto', 'ririta@gmail.com', 'Itajaí', 'rita', 'Mário Costa', 'APP', '(47)93389-2227', 'texto');
INSERT INTO tabela_asc (login, data, conteudo, email, localizacao, login_dest, nome, origem, telefone, tipo) VALUES ('paulo', '2019-07-10', 'Pagar conta de luz', 'mjua@gmail.com', 'Blumenau', 'julia', 'Maria José', 'Web', '(47)98944-8337', 'vídeo');
APPLY BATCH;
```
