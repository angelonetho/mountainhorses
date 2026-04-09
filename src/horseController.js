import db from "./db.js";

const validateHorse = (body) => {
  const { name, breed, age, color, weight, height, health_status } = body;
  const errors = [];

  if (!name || typeof name !== "string") errors.push("name é obrigatório");
  if (!breed || typeof breed !== "string") errors.push("breed é obrigatório");
  if (!age || typeof age !== "number" || age <= 0)
    errors.push("age deve ser um número positivo");
  if (!color || typeof color !== "string") errors.push("color é obrigatório");
  if (!weight || typeof weight !== "number" || weight <= 0)
    errors.push("weight deve ser um número positivo");
  if (!height || typeof height !== "number" || height <= 0)
    errors.push("height deve ser um número positivo");
  if (!health_status || typeof health_status !== "string")
    errors.push("health_status é obrigatório");

  return errors;
};

export const fetch = async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM horses");
    res.json(rows);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar cavalos", error: error.message });
  }
};

export const create = async (req, res) => {
  try {
    const errors = validateHorse(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });

    const { name, breed, age, color, weight, height, health_status } = req.body;
    const [result] = await db.query(
      "INSERT INTO horses (name, breed, age, color, weight, height, health_status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [name, breed, age, color, weight, height, health_status]
    );
    res.status(201).json({ id: result.insertId, ...req.body });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar cavalo", error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;

    const [existing] = await db.query("SELECT id FROM horses WHERE id = ?", [
      id,
    ]);
    if (existing.length === 0)
      return res.status(404).json({ message: "Cavalo não encontrado" });

    const errors = validateHorse(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });

    const { name, breed, age, color, weight, height, health_status } = req.body;
    await db.query(
      "UPDATE horses SET name=?, breed=?, age=?, color=?, weight=?, height=?, health_status=? WHERE id=?",
      [name, breed, age, color, weight, height, health_status, id]
    );
    res.json({ id, ...req.body });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar cavalo", error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;

    const [existing] = await db.query("SELECT id FROM horses WHERE id = ?", [
      id,
    ]);
    if (existing.length === 0)
      return res.status(404).json({ message: "Cavalo não encontrado" });

    await db.execute("DELETE FROM horses WHERE id = ?", [id]);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao deletar cavalo", error: error.message });
  }
};
