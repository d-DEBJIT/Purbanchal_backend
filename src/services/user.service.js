const User = require("../models/user.model");
const bcrypt = require("bcrypt");

class UserService {
  async createUser(data) {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    return await User.create(data);
  }

  async getUsers({ offset = 0, limit = 10, keyword, fetchKey }) {
    limit = Math.min(Number(limit) || 10, 20);
    offset = Number(offset) || 0;

    const filter = {};

    if (keyword) {
      const regex = new RegExp(keyword, "i");
      filter.$or = [{ name: regex }, { email: regex }];
    }

    if (fetchKey && typeof fetchKey === "object") {
      Object.assign(filter, fetchKey);
    }

    const users = await User.find(filter)
      .skip(offset)
      .limit(limit)
      .sort({ createdAt: -1 });

    const total = await User.countDocuments(filter);

    return { users, total, offset, limit };
  }

  async getUserById(id) {
    return await User.findById(id);
  }

  async updateUser(id, data) {
    if (data.password) {
      const salt = await bcrypt.genSalt(10);
      data.password = await bcrypt.hash(data.password, salt);
    }
    return await User.findByIdAndUpdate(id, data, { new: true });
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}

module.exports = new UserService();
