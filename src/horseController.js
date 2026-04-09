const horses = [];

export const fetch = (req, res) => {
  res.json(horses);
};

export const create = (req, res) => {
  const horse = { id: Date.now(), ...req.body };
  horses.push(horse);
  res.status(201).json(horse);
};

export const update = (req, res) => {
  const { id } = req.params;
  const index = horses.findIndex((c) => c.id == id);
  horses[index] = { id, ...req.body };
  res.json(horses[index]);
};

export const remove = (req, res) => {
  const { id } = req.params;
  horses = horses.filter((c) => c.id != id);
  res.status(204).send();
};
