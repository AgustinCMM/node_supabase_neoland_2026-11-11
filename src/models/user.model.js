import { db } from "../prisma/db.ts";

function buildWhereClause(identifier) {
  const num = Number(identifier);
  if (!Number.isNaN(num) && typeof identifier !== "boolean") {
    return { id: num };
  }
  return { email: String(identifier) };
}

export async function getUserModel() {
  try {
    const users = await db.orm.public.User.all();
    return users;
  } catch (e) {
    console.error(e);
    throw new Error(e.message || "Error al obtener los usuarios");
  }
}

export async function registerUserModel(email, name, username, password) {
  try {
    const created = await db.orm.public.User.create({
      email,
      name,
      username,
      password,
    });
    return created;
  } catch (e) {
    console.error(e);
    throw new Error(e.message || "Error al registrar el usuario");
  }
}

export async function findUserModel(identifier) {
  try {
    const where = buildWhereClause(identifier);
    const user = await db.orm.public.User.where(where).first();
    if (!user) {
      throw new Error("Usuario no encontrado");
    }
    return user;
  } catch (e) {
    console.error(e);
    throw new Error(e.message || "Error al buscar el usuario");
  }
}

export async function updateUserModel(identifier, updateData) {
  try {
    const where = buildWhereClause(identifier);
    const existing = await db.orm.public.User.where(where).first();
    if (!existing) {
      throw new Error("Usuario no encontrado para actualizar");
    }
    const updated = await db.orm.public.User.where(where).update(updateData);
    return updated || existing;
  } catch (e) {
    console.error(e);
    throw new Error(e.message || "Error al actualizar el usuario");
  }
}

export async function deleteUserModel(identifier) {
  try {
    const where = buildWhereClause(identifier);
    const existing = await db.orm.public.User.where(where).first();
    if (!existing) {
      throw new Error("Usuario no encontrado para eliminar");
    }
    const deleted = await db.orm.public.User.where(where).delete();
    return deleted || existing;
  } catch (e) {
    console.error(e);
    throw new Error(e.message || "Error al eliminar el usuario");
  }
}
