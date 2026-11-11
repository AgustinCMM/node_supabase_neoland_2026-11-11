import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "neoland_secret_token_key_2026";

export function createToken(payload) {
  // Aseguramos que la contraseña no viaje dentro del payload del token si viniera incluida
  if (typeof payload === "object" && payload !== null) {
    const cleanPayload = { ...payload };
    delete cleanPayload.password;
    return jwt.sign(cleanPayload, SECRET_KEY, { expiresIn: "24h" });
  }
  return jwt.sign({ data: payload }, SECRET_KEY, { expiresIn: "24h" });
}

export function verifyToken(token) {
  return jwt.verify(token, SECRET_KEY);
}

export default {
  createToken,
  verifyToken,
};
