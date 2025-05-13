// Importando o módulo http
const http = require('http');

// Definindo a porta do servidor
const port = 3000;

// Criando o servidor HTTP
const server = http.createServer((req, res) => {
  // Definindo o cabeçalho da resposta
  res.writeHead(200, { 'Content-Type': 'text/html' });

  // Resposta para as requisições
  res.end('<h1>Bem-vindo ao nosso Servidor HTTP!</h1>');
});

// Iniciando o servidor
server.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${8093}`);
});
