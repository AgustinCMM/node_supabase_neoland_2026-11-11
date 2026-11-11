import { 
  createProductModel, 
  findProductModel, 
  updateProductModel, 
  deleteProductModel 
} from "../models/products.model.js";

export async function createProductService(body) {
  const { name, description, price, stock } = body;
  return await createProductModel(name, description, price, stock);
}

export async function findProductService(name) {
  try {
    const product = await findProductModel(name);
    return { status: 200, message: product };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}

export async function updateProductService(name, body) {
  try {
    const updated = await updateProductModel(name, body);
    return { status: 200, message: updated };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}

export async function deleteProductService(name) {
  try {
    const deleted = await deleteProductModel(name);
    return { status: 200, message: deleted };
  } catch (e) {
    return { status: 404, message: e.message };
  }
}