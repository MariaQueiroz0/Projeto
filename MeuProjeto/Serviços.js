const express = require('express');
const path = require('path');
const app = express();
const PORT = 8096;

// Rota para servir o HTML do serviço "eventos"
app.get('/eventos', (req, res) => {
  res.sendFile(path.join(__dirname, 'serviços', 'eventos.html'));
});

// Outras rotas (se quiser)
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

app.get('/servicos', (req, res) => {
  res.sendFile(path.join(__dirname, 'serviços', 'servicos.html'));
});
