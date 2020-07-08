# Recuperação de senha
**RF**
- O usuário deve poder recuperar sua senha informando o seu e-mail;
- O usuário deve poder receber um email com instruções de recuperação de senha;
- O usuário deve poder resetar sua senha;

**RNF**
- Utilizar mailtrap para testar envios em ambiente de desenvolvimento;
- Utilzar o Amazon SES para envios de e-mails em produção;
- O envio de e-mails deve acontecer em segundo plano

**RN**
- O link enviado por e-mail para resetar senha deve expirar em 2 horas;
- O usuário precisa confirmar a senha ao resetar sua senha antiga;


# Atualização do Perfil
**RF**
- O usuário deve poder atualizar seu perfil (nome, email, senha);

**RN**
- O usuário não pode alterar seu e-mail para um e-mail já utilizado por outro usuário;
- Para atualizar a sua senha o usuário deve informar sua senha antiga;
- Para atualizar a sua senha o usuário deve confirmar-lá;

# Painel do prestador
**RF**
- O usuário deve poder listar seus agendamentos de um dia específico;
- O prestador deve receber uma notificação sempre houver um novo agendamento;
- O prestador deve poder visualizar as notificações não lidas;

**RNF**
- Os agendamentos dos prestadores devem ser armazenados em cache;
- As noticações do prestador devem ser armazenadas no MongoDB;
- As noticações do prestador devem ser enviadas em tempo real utilizando Socket.io;

**RN**
- A notificação deve possuir status de lida ou não-lida;


# Agendamento de serviços
**RF**
- O usuário deve poder listar todos os prestadores cadastrados;
- O usuário deve poder listar os dias do mês com horários disponíveis de um prestador;
- O usuário deve poder listar horários especificos de um dia de um prestador;
- O usuário deve poder agendar um novo serviço com um prestador;

**RNF**
- A listagem de prestadores devem ser armazenada em cache;

**RN**
- Todo agendamento deve durar 1 hora;
- Os agendamentos devem estar disponíveis entre 8h e 18h (último às 17h);
- O usuário não pode agendar em um horário já ocupado;
- O usuário não pode angendar em um horário que já passou;
- O usuário não pode angendar um horário consigo mesmo;
