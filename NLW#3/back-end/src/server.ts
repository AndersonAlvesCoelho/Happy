
import express from 'express';
import path from 'path';
import cors from 'cors';

import 'express-async-errors'; // importação para poder ter o res de erro

import './database/connection';

import routes from './routes';
import errorHandler from './errors/handler';

const app = express();

app.use(cors()); // prtmitir que o fronte de port diferente posso acessar a api
app.use(express.json());
app.use(routes); // rota das api
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads'))); //pode te acesso visual a img
app.use(errorHandler); //tratando os erros

app.listen(3333); //porta da aplicação

/* Dicas */

// Rota = conjunto
// Recurso = usuario

// Métodos HTTP = GET, POST, PUT, DELET
// Parâmetros :
    //Query Params: http://localhost:3333/users?search=anderson
    //Route Params: http://localhost:3333/users/1 (Identificar um recurso)
    //Body:  http://localhost:3333/users (Identificar um recurso)

// GET = Buscar uma informação (lista, item)
// POST = Criar um informação
// put = Editando um informação
// DELET = Deletando um informação