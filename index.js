import dotenv from 'dotenv';
import express from 'express';

  // Carregando variáveis de ambiente do arquivo .env

import { PostgresHelper } from './src/db/postgres/helper.js';  // Corrigido para importar o pool corretamente

const app = express();

app.get('/', async (req, res) => {  // Tornando a função assíncrona
 
  const result = await PostgresHelper.query('SELECT * FROM users;');

  res.send(JSON.stringify(results));  // Corrigido para usar 'result' ao invés de 'results'
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
}); 

