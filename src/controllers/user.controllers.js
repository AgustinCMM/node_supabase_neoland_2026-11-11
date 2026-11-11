import { 
  getUserService, 
  registerUserService, 
  findUserService, 
  updateUserService, 
  deleteUserService 
} from "../services/user.service.js";

export async function getUserController(req, res) {
  try {
    const users = await getUserService();
    res.status(200).send(users);
  } catch (e) {
    res.status(500).send({ error: e.message });
  }
}

export async function setUserController(req, res) {
  try {
    const result = await registerUserService(req.body);
    res.status(201).send(result);
  } catch (e) {
    res.status(400).send({ error: e.message });
  }
}

export async function findUserController(req, res) {
  const identifier = req.params.id ?? req.params.identifier;
  const result = await findUserService(identifier);
  res.status(result.status).send(result.message);
}

export async function updateUserController(req, res) {
  const identifier = req.params.id ?? req.params.identifier;
  const result = await updateUserService(identifier, req.body);
  res.status(result.status).send(result.message);
}

export async function deleteUserController(req, res) {
  const identifier = req.params.id ?? req.params.identifier;
  const result = await deleteUserService(identifier);
  res.status(result.status).send(result.message);
}
