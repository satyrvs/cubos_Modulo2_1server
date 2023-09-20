//1 - Iniciar o projeto: npm init -y (o -y cria o projeto com configurações padrão)
//2 - criação do arquivo .gitignore (em cada linha do arquivo será listado o que deve ser ignorado pelo git)
//2.1 - inserir o node_modules no gitignore
//3 - criação da estrutura d pastas e arquivos:
//3.1 - criação da pasta src (src significa source, que pode ser traduzido como fonte - onde ficará o código fonte do projeto)
//3.2 - criação, dentro da pasta src, de um arquivo index.js (principal arquivo do projeto)
//4 - instalação do express no projeto npm install express
//5 - importação no arquivo index.js do express atraves do require: const express = require('express');
//6 - inicialização / instanciação do express atraves do comando: const app = express();
//7 - criação de uma rota: app.get('/',(requisicao,resposta)=>{resposta.send('ola!! este é meu primeiro server!');}criação de uma rota
//7.1 - o '/' é a rota padrão, ou seja, quando acessar a url, o servidor irá responder com o texto 'ola!! este é meu primeiro server!'
//8 - definião da porta a ser utilizada pelo express: app.listen(3000), senso a porta nesse caso a 3000
//9 - para testar o servidor, inicialize o mesmo executando  arquivo index;
//10 - Abra um navegador e digite http://localhost:3000
//obs1 - as alterações só serão efetivadas se o servidor for reiniciado







/*
//const lodash = require('lodash');
const { uniq } = require('lodash');  
//const array = require('./array');
const {arrayNum, arrayLet} = require('./array');



//const array = [1,2,3,4,4,5,6,7,8,8,9,9,0,0,];

//const arrayunico = lodash.uniq(array);
//const arrayUnico = uniq(array);

const arrayUnicoLet = uniq(arrayLet);
const arrayUnicoNum = uniq(arrayNum);



//console.log(arrayNum);
//console.log(arrayLet);
//console.log (arrayUnico);

console.log (arrayUnicoLet);
console.log (arrayUnicoNum);
*/

