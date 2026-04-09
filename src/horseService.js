import db from "./db.js";

export const findAll = async () => {
  const [rows] = await db.query("SELECT * FROM horses");
  return rows;
};

export const insert = async (horse) => {
  const { name, breed, age, color, weight, height, health_status } = horse;
  const [result] = await db.query(
    "INSERT INTO horses (name, breed, age, color, weight, height, health_status) VALUES (?, ?, ?, ?, ?, ?, ?)",
    [name, breed, age, color, weight, height, health_status]
  );
  return { id: result.insertId, ...horse };
};

export const findById = async (id) => {
  const [rows] = await db.query("SELECT * FROM horses WHERE id = ?", [id]);
  return rows[0] || null;
};

export const updateById = async (id, horse) => {
  const { name, breed, age, color, weight, height, health_status } = horse;
  await db.query(
    "UPDATE horses SET name=?, breed=?, age=?, color=?, weight=?, height=?, health_status=? WHERE id=?",
    [name, breed, age, color, weight, height, health_status, id]
  );
  return { id, ...horse };
};

export const deleteById = async (id) => {
  await db.execute("DELETE FROM horses WHERE id = ?", [id]);
};
