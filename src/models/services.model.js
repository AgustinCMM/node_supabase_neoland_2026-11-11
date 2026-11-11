import { db } from "../prisma/db.ts";

export async function createServiceModel(name, description, price) {
  try {
    const service = await db.orm.services.create({
      name,
      description,
      price,
    });
    return service;
  } catch (e) {
    console.log(e);
    throw new Error("Error al crear el servicio");
  }
}

export async function findServiceModel(name) {
  try {
    const service = await db.orm.services
      .where({ name: name })
      .first();
    if (!service) {
      throw new Error("Servicio no encontrado");
    }
    return service;
  } catch (e) {
    console.log(e);
    throw new Error(e.message || "Error al buscar el servicio");
  }
}

export async function updateServiceModel(name, updateData) {
  try {
    const updatedService = await db.orm.services
      .where({ name: name })
      .update(updateData);
    if (!updatedService) {
      throw new Error("Servicio no encontrado para actualizar");
    }
    return updatedService;
  } catch (e) {
    console.log(e);
    throw new Error(e.message || "Error al actualizar el servicio");
  }
}

export async function deleteServiceModel(name) {
  try {
    const deletedService = await db.orm.services
      .where({ name: name })
      .delete();
    if (!deletedService) {
      throw new Error("Servicio no encontrado para eliminar");
    }
    return deletedService;
  } catch (e) {
    console.log(e);
    throw new Error(e.message || "Error al eliminar el servicio");
  }
}