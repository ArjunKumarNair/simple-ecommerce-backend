/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('products').del();
  await knex('products').insert([
    { name: 'Smartphone', category: 'Electronics', price: 699.99, images: JSON.stringify(['smartphone1.jpg', 'smartphone2.jpg']) },
    { name: 'Laptop', category: 'Electronics', price: 1299.99, images: JSON.stringify(['laptop1.jpg', 'laptop2.jpg']) },
    { name: 'T-shirt', category: 'Clothing', price: 19.99, images: JSON.stringify(['tshirt1.jpg', 'tshirt2.jpg']) },
    { name: 'Jeans', category: 'Clothing', price: 49.99, images: JSON.stringify(['jeans1.jpg', 'jeans2.jpg']) },
    { name: 'Cookware Set', category: 'Kitchen', price: 89.99, images: JSON.stringify(['cookware1.jpg', 'cookware2.jpg']) },
    { name: 'Bedding Set', category: 'Kitchen', price: 59.99, images: JSON.stringify(['bedding1.jpg', 'bedding2.jpg']) },
    { name: 'Yoga Mat', category: 'Sports & Outdoors', price: 29.99, images: JSON.stringify(['yogamat1.jpg', 'yogamat2.jpg']) },
    { name: 'Running Shoes', category: 'Sports & Outdoors', price: 89.99, images: JSON.stringify(['runningshoes1.jpg', 'runningshoes2.jpg']) },
    { name: 'Skincare Product', category: 'Beauty & Personal Care', price: 24.99, images: JSON.stringify(['skincare1.jpg', 'skincare2.jpg']) },
    { name: 'Haircare Product', category: 'Beauty & Personal Care', price: 14.99, images: JSON.stringify(['haircare1.jpg', 'haircare2.jpg']) }
  ]);
};