const { DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

const Fqa = sequelize.define('Fqa', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },

    assets: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    extra_content: {
        type: DataTypes.TEXT,
        allowNull: true,
       
    },

    heading: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    icon: {
        type: DataTypes.STRING,
        allowNull: true,
    },

    status: {
        type: DataTypes.ENUM("0", "1"),
        allowNull: true,
    },

    sub_title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    asset_json: {
        type: DataTypes.JSON,
        allowNull: true,
    },
    types: {
        type: DataTypes.STRING,
        allowNull: true,
    },
}, {
    tableName: 'fqas',
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

module.exports = Fqa;
