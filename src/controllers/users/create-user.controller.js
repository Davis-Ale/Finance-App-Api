import { createUserUseCase } from "../../use-cases/users/create-user.usecase.js";
import { AppError } from "../../errors/AppError.js";

export const createUserController = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      throw new AppError("Missing fields", 400);
    }

    const user = await createUserUseCase({ name, email, password });
    return res.status(201).json(user);
  } catch (err) {
    next(err);
  }
};
