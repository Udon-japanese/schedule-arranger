'use strict';
const {sequelize, DataTypes} = require('./sequelize-loader');

const User = sequelize.define(
  'users',
  {
    userId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false// NULL値を許容しない代わりに、より高速な検索が可能に
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = User;