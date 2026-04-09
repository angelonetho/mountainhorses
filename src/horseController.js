import * as horseService from "./horseService.js";

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
    const horses = await horseService.findAll();
    res.json(horses);
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

    const horse = await horseService.insert(req.body);
    res.status(201).json(horse);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar cavalo", error: error.message });
  }
};

export const update = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await horseService.findById(id);
    if (!existing)
      return res.status(404).json({ message: "Cavalo não encontrado" });

    const errors = validateHorse(req.body);
    if (errors.length > 0) return res.status(400).json({ errors });

    const horse = await horseService.updateById(id, req.body);
    res.json(horse);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar cavalo", error: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const { id } = req.params;
    const existing = await horseService.findById(id);
    if (!existing)
      return res.status(404).json({ message: "Cavalo não encontrado" });

    await horseService.deleteById(id);
    res.status(204).send();
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao deletar cavalo", error: error.message });
  }
};
