const User = require("../schemas/user.schema");

const createUser = async ({ email, password, nickname, image }) => {
  try {
    const user = User.create({ email, nickname, password, image });
    return user;
  } catch (error) {
    throw new Error("[DB Error] createUser", { cause: error });
  }
};

const findUserByEmail = async (email) => {
  try {
    const user = await User.findOne({ email }, "-_id -__v").lean();
    return user;
  } catch (error) {
    throw new Error("[DB Error] findUserByEmail", { cause: error });
  }
};

const updateUserById = async (id, { password }) => {
  try {
    const user = await User.findByIdAndUpdate(id, { password });
    return user;
  } catch (error) {
    throw new Error("[DB Error] updateUserById", { cause: error });
  }
};

module.exports = {
  createUser,
  findUserByEmail,
  updateUserById,
};
