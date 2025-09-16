import { usersRepository } from "../../repositories/postgres/users.repository.js";

export const getUserByIdUseCase = async (id) => {
  const user = await usersRepository.findById(id);
  if (user) delete user.password;
  return user;
};
