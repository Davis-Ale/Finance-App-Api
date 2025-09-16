import { getUserByIdUseCase } from "../../use-cases/users/get-user-by-id.usecase.js";

export const getUserByIdController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await getUserByIdUseCase(id);
    if (!user) return res.status(404).json({ message: "User not found" });
    return res.json(user);
  } catch (err) {
    next(err);
  }
};
