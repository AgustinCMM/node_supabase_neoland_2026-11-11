import { 
  createServiceModel, 
  findServiceModel, 
  updateServiceModel, 
  deleteServiceModel 
} from "../models/services.model.js";

export async function createServiceService(body) {
  const { name, description, price } = body;
  return await createServiceModel(name, description, price);
}

export async function findServiceService(name) {
  try {
    const service = await findServiceModel(name);
    return { status: 200, message: service };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}

export async function updateServiceService(name, body) {
  try {
    const updated = await updateServiceModel(name, body);
    return { status: 200, message: updated };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}

export async function deleteServiceService(name) {
  try {
    const deleted = await deleteServiceModel(name);
    return { status: 200, message: deleted };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}