const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');
const bcrypt = require('bcrypt');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true,
    }
  },

  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  dob: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },

  gender: {
    type: DataTypes.ENUM("0", "1"),
    allowNull: false,
  },

  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
}, {
  tableName: 'users',
  timestamps: false,
  hooks: {
    beforeCreate: async (user) => {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
    }
  }
});

// Sync the model with DB (create table if not exists)
(async () => {
  try {
    await sequelize.sync(); // or sync({ alter: true }) if you want to auto-update columns
    console.log('✅ User table synced');
  } catch (err) {
    console.error('❌ Failed to sync User table:', err);
  }
})();

module.exports = User;
