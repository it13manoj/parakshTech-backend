const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Home = sequelize.define('Home', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    assets: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    extra_content: {
        type: DataTypes.STRING,
        allowNull: false,
       
    },

    heading: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    icon: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    status: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: false,
    },

    sub_title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    asset_json: {
        type: DataTypes.JSON,
        allowNull: false,
    },
    types: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'homes',
    timestamps: true,
  
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

module.exports = Home;
