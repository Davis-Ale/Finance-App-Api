import pg, { Query } from 'pg'

const { Pool } = pg

 export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  port: process.env.POSTGRES_PORT,
  database: process.env.POSTGRES_DB,
  host: process.env.POSTGRES_HOST,
})

export const PostgresHelper =  {
   query: async (query, params) => {
    const client = await pool.connect();

  const result = await client.query(query, params);


    await client.release(); // Libera o cliente após a consulta
    return result.rows; // Retorna apenas as linhas do resultado
  },
}


  