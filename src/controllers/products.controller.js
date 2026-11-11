import { 
  createProductService, 
  findProductService, 
  updateProductService, 
  deleteProductService 
} from "../services/products.service.js";

export async function createProduct(req, res) {
  try {
    const result = await createProductService(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function findProduct(req, res) {
  const result = await findProductService(req.params.name);
  res.status(result.status).json(result.message);
}

export async function updateProduct(req, res) {
  const result = await updateProductService(req.params.name, req.body);
  res.status(result.status).json(result.message);
}

export async function deleteProduct(req, res) {
  const result = await deleteProductService(req.params.name);
  res.status(result.status).json(result.message);
}