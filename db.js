const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  database: "auth_2we7",
  username: "root",
  password: "ekoELY7k5ioui9yZU6r2aJZSSmmDv0Q6",
  host: "dpg-chk9k167avj217co01fg-a.oregon-postgres.render.com",
  dialect: "postgres",
  port: 5432, // default PostgreSQL port
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // disable SSL verification
    },
  },
});

module.exports = sequelize;