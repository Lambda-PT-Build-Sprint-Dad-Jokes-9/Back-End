const bcrypt = require("bcryptjs");

exports.seed = function (knex) {
  
    // Deletes ALL existing entries
    return knex('user')
    .truncate()
      .then(function () {
        // Inserts seed entries
        return knex('user').insert([
          {
            username: 'DadBOT101',
            password: bcrypt.hashSync("Password350", 12)
          },
          { 
            username: 'DadBOT203',
            password: bcrypt.hashSync("Password370", 12)
          },
          {
            username: 'DadBOT204',
            password: bcrypt.hashSync("Password360", 12)
          },
        ]);
      });
  };