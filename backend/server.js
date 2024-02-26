const express = require('express');
const server = express();
const port = 3400;

server.use(express.json());

const users = [
    {id:1, usuario: "Henrique Almeida", password: "henrique1234"},
    {id:2, usuario: "Guilherme Gomes", password: "guilherme1234"},
]


server.post('/usuarios', (req,res)=>{
    const newUsuario = req.body
    users.push(newUsuario)
    console.log('Novo usuário cadastrado', newUsuario)
    return res.send(users)
})


server.get('/usuarios', (req, res)=>{
    console.log(users)
    return res.send(users)
})

server.listen(port)