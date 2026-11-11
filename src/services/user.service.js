import { 
  getUserModel, 
  registerUserModel, 
  findUserModel, 
  updateUserModel, 
  deleteUserModel 
} from "../models/user.model.js";
import { createToken } from "./token/token.service.js";
import bcrypt from "bcrypt";

export async function getUserService() {
  return await getUserModel();
}

const saltRounds = 10;

export async function registerUserService(body) {
  let { email, name, username, password } = body;

  if (!email) {
    throw new Error("El email es obligatorio");
  }

  // Hasheamos la contraseña con bcrypt si se proporciona
  if (password) {
    password = await bcrypt.hash(password, saltRounds);
  }

  // Registramos el usuario en la base de datos
  const created = await registerUserModel(email, name, username, password);

  // Generamos el token con el ID, email y username del usuario
  const token = createToken({
    id: created?.id,
    email: created?.email,
    username: created?.username,
  });

  return {
    message: "Usuario registrado con éxito",
    token,
    user: created,
  };
}

export async function findUserService(identifier) {
  try {
    const user = await findUserModel(identifier);
    return { status: 200, message: user };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}

export async function updateUserService(identifier, body) {
  try {
    const updateData = { ...body };
    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, saltRounds);
    }
    const updated = await updateUserModel(identifier, updateData);
    return { status: 200, message: updated };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}

export async function deleteUserService(identifier) {
  try {
    const deleted = await deleteUserModel(identifier);
    return { status: 200, message: deleted };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}
