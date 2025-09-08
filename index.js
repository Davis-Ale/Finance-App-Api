import 'dotenv/config.js'
import express from 'express'

import { PostgresHelper } from './src/db/postgres/helper.js'

const app = express()

app.get('/', async (req, res) => {
    const result = await PostgresHelper.query('SELECT * FROM users')
    res.send(JSON.stringify(result))
})

app.listen(process.env.PORT, () => console.log('listening on port 3000'))

localhost:4500