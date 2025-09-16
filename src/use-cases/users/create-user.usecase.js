import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";
import { usersRepository } from "../../repositories/postgres/users.repository.js";
import { AppError } from "../../errors/AppError.js";

export const createUserUseCase = async ({ name, email, password }) => {
  const existing = await usersRepository.findByEmail(email);
  if (existing) throw new AppError("Email already in use", 409);

  const id = uuid();
  const hashed = await bcrypt.hash(password, 10);

  const created = await usersRepository.create({
    id,
    name,
    email,
    password: hashed,
  });

  delete created.password;
  return created;
};
