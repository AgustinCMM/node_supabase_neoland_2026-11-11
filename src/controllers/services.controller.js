import { 
  createServiceService, 
  findServiceService, 
  updateServiceService, 
  deleteServiceService 
} from "../services/services.service.js";

export async function createService(req, res) {
  try {
    const result = await createServiceService(req.body);
    res.status(201).json(result);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export async function findService(req, res) {
  const result = await findServiceService(req.params.name);
  res.status(result.status).json(result.message);
}

export async function updateService(req, res) {
  const result = await updateServiceService(req.params.name, req.body);
  res.status(result.status).json(result.message);
}

export async function deleteService(req, res) {
  const result = await deleteServiceService(req.params.name);
  res.status(result.status).json(result.message);
}