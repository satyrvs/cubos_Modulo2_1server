//importação do express
const express = require('express');
//instanciação do express
const app = express();


//definição da porta a ser utilizada pelo express
app.listen(3000);

//criação de uma rota
app.get('/',(requisicao,resposta)=>{
    resposta.send('ola!! este é meu primeiro server!');
});
//criação de uma rota 1
app.get('/1',(requisicao,resposta)=>{
    resposta.send('ola!! este é meu primeiro server!');
});
//criação de uma rota 2
app.get('/2',(requisicao,resposta)=>{
    const array = [1,2,3,4,5,6,7,8,9,0]
    resposta.send(array);
});

