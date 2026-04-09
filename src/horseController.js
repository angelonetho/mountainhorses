import db from "./db.js";

export const fetch = async (req, res) => {
  const [rows] = await db.query("SELECT * FROM horses");
  res.json(rows);
};

export const create = async (req, res) => {
  const { name, breed, age, color, weight, height, health_status } = req.body;
  const [result] = await db.query(
    "INSERT INTO horses (name, breed, age, color, weight, height, health_status) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, breed, age, color, weight, height, health_status]
  );
  res.status(201).json({ id: result.insertId, ...req.body });
};

export const update = async (req, res) => {
  const { id } = req.params;
  const { name, breed, age, color, weight, height, health_status } = req.body;
  await db.query(
    "UPDATE horses SET name=?, breed=?, age=?, color=?, weight=?, height=?, health_status=? WHERE id=?",
    [name, breed, age, color, weight, height, health_status, id]
  );
  res.json({ id, ...req.body });
};

export const remove = async (req, res) => {
  const { id } = req.params;
  await db.execute("DELETE FROM horses WHERE id = ?", [id]);
  res.status(204).send();
};
