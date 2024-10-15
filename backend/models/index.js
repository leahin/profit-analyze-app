import { Sequelize } from "sequelize";

const sequelize = new Sequelize('db_name', 'username', 'password', {
    host: 'localhost',
    dialect: 'postgres'
});  // TODO: update db_name, username, and password

sequelize.authenticate()
    .then(() => console.log('Database connected.'))
    .catch(err => console.error('Unable to connect to the database:', err));

module.exports = sequelize;