const express = require('express'); //chama o express

const app = express(); //cria o servidor

app.get('/', (req, res) => {
    res.send('Olá Mundo'); //resposta em formato de texto
});
app.listen(3000, () => console.log('Servidor rodando na porta 3000')); // Cria a porta com callback - function
