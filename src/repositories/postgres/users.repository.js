import { PostgresHelper } from "./postgres-helper.js";

const table = "users";

export const usersRepository = {
  async create({ id, name, email, password }) {
    const sql = `
      INSERT INTO ${table} (id, name, email, password)
      VALUES ($1, $2, $3, $4)
      RETURNING id, name, email, password;
    `;
    const rows = await PostgresHelper.query(sql, [id, name, email, password]);
    return rows[0];
  },

  async findById(id) {
    const sql = `SELECT id, name, email, password FROM ${table} WHERE id = $1 LIMIT 1`;
    const rows = await PostgresHelper.query(sql, [id]);
    return rows[0];
  },

  async findByEmail(email) {
    const sql = `SELECT id, name, email, password FROM ${table} WHERE email = $1 LIMIT 1`;
    const rows = await PostgresHelper.query(sql, [email]);
    return rows[0];
  },
};
