/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del()
  await knex('products').insert([
    { name: 'Product 1', category: 'Category 1', price: 10.99, images: JSON.stringify(['image1.jpg', 'image2.jpg'])},
    { name: 'Product 2', category: 'Category 2', price: 19.99, images: JSON.stringify(['image3.jpg', 'image4.jpg'])},
    { name: 'Product 3', category: 'Category 1', price: 15.99, images: JSON.stringify(['image5.jpg', 'image6.jpg'])},
  ]);
};
