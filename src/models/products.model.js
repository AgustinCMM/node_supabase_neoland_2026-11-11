import { db } from "../prisma/db.ts";

export async function createProductModel(name, description, price, stock) {
  try {
    const product = await db.orm.products.create({
      name,
      description,
      price,
      stock,
    });
    return product;
  } catch (e) {
    console.log(e);
    throw new Error("Error al crear el producto");
  }
}

export async function findProductModel(name) {
  try {
    const product = await db.orm.products
      .where({
        name: name,
      })
      .first();
    if (!product) {
      throw new Error("Producto no encontrado");
    }
    return product;
  } catch (e) {
    console.log(e);
    throw new Error(e.message || "Error al buscar el producto");
  }
}

export async function updateProductModel(name, updateData) {
  try {
    const updatedProduct = await db.orm.products
      .where({ name: name })
      .update(updateData);
    if (!updatedProduct) {
      throw new Error("Producto no encontrado para actualizar");
    }
    return updatedProduct;
  } catch (e) {
    console.log(e);
    throw new Error(e.message || "Error al actualizar el producto");
  }
}

export async function deleteProductModel(name) {
  try {
    const deletedProduct = await db.orm.products
      .where({ name: name })
      .delete();
    if (!deletedProduct) {
      throw new Error("Producto no encontrado para eliminar");
    }
    return deletedProduct;
  } catch (e) {
    console.log(e);
    throw new Error(e.message || "Error al eliminar el producto");
  }
}