import configKeys from './index';

const config = {
  development: {
    username: configKeys.db_user,
    password: configKeys.db_passwd,
    database: configKeys.db_name,
    host: configKeys.db_host,
    post: configKeys.db_port,
    dialect: "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
};

module.exports = config;