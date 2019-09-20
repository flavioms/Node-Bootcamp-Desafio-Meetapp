# Desafio bootcamp - projeto MeetApp

## Parte 1

### Autenticação

- [x] Permita que um usuário se autentique em sua aplicação utilizando e-mail e senha.
- [x] A autenticação deve ser feita utilizando JWT.
- [x] Realize a validação dos dados de entrada;

### Cadastro e atualização de usuários

- [x] Permita que novos usuários se cadastrem em sua aplicação utilizando nome, e-mail e senha.
- [x] Para atualizar a senha, o usuário deve também enviar um campo de confirmação com a mesma senha.
- [x] Criptografe a senha do usuário para segurança.
- [x] Realize a validação dos dados de entrada;

## Parte 2

### Gerenciamento de arquivos

- [x] Crie uma rota para upload de arquivos que cadastra em uma tabela o caminho e nome do arquivo e retorna todos dados do arquivo cadastrado.

### Gerenciamento de meetups

- [x] O usuário pode cadastrar meetups na plataforma com título do meetup, descrição, localização, data e hora e imagem (banner). Todos campos são obrigatórios. Adicione também um campo user_id que armazena o ID do usuário que organiza o evento.
- [x] Não deve ser possível cadastrar meetups com datas que já passaram.
- [x] O usuário também deve poder editar todos dados de meetups que ainda não aconteceram e que ele é organizador.
- [x] Crie uma rota para listar os meetups que são organizados pelo usuário logado.
- [x] O usuário deve poder cancelar meetups organizados por ele e que ainda não aconteceram. O cancelamento deve deletar o meetup da base de dados.

### Inscrição no meetup

- [x] O usuário deve poder se inscrever em meetups que não organiza.
- [x] O usuário não pode se inscrever em meetups que já aconteceram.
- [x] O usuário não pode se inscrever no mesmo meetup duas vezes.
- [x] O usuário não pode se inscrever em dois meetups que acontecem no mesmo horário.
- [x] Sempre que um usuário se inscrever no meetup, envie um e-mail ao organizador contendo os dados relacionados ao usuário inscrito. O template do e-mail fica por sua conta :)

### Listagem de meetups

- [x] Crie uma rota para listar os meetups com filtro por data (não por hora), os resultados dessa listagem devem vir paginados em 10 itens por página. Abaixo tem um exemplo de chamada para a rota de listagem dos meetups:
- [x] http://localhost:3333/meetups?date=2019-07-01&page=2 - Nesse exemplo, listaremos a página 2 dos meetups que acontecerão no dia 01 de Julho.
- [x] Nessa listagem retorne também os dados do organizador.

### Listagem de inscrições

- [x] Crie uma rota para listar os meetups em que o usuário logado está inscrito.
- [x] Liste apenas meetups que ainda não passaram e ordene meetups mais próximos como primeiros da lista.
