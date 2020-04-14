const kenx = require("./client");

module.exports = {
  getAll() {
    return kenx("clucks").select("*").orderBy("createdAt", "desc");
  },
  getOne() {
    return kenx("clucks").where("id", id).first();
  },
  create(cluck) {
    return kenx("clucks").insert(cluck, "*");
  },
  update(id, cluck) {
    return kenx("clucks").where("id, id").update(cluck, "*");
  },
};
