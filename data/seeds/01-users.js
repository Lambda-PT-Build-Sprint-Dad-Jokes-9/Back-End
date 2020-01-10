const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  
    // Deletes ALL existing entries
    return knex('user').truncate()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
          {
            id: 1,
            username: 'DadBOT101',
            password: bcrypt.hashSync("Password350", 12)
          },
          {
            id: 2,
            username: 'DadBOT203',
            password: bcrypt.hashSync("Password370", 12)
          },
          {
            id: 3,
            username: 'DadBOT204',
            password: bcrypt.hashSync("Password360", 12)
          },
        ]);
      });
  };