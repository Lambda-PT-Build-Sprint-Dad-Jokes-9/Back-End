const knex = require('knex')('production')

const config = require('../knexfile.js');

const dbEnv = process.env.DB_ENV || "develpment";

const db =  knex(config[dbEnv])

module.exports = db