
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('fruits')
    .truncate() //deletes data and resets primary key back to one
    .then(function () {
      // Inserts seed entries
      return knex('fruits').insert([
        {name: 'mango', delicious: true, color: 'yellow'},
        {name: 'watermelon', delicious: true, color: 'green'},
        {name: 'blueberry', delicious: true, color: 'blue'}
      ]);
    });
};
