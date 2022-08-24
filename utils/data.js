

const data = {
  users: [
    {
      name: 'John',
      email: 'admin@example.com',
      // password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Jane',
      email: 'user@example.com',
      // password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Potato',
      slug: 'potato',
      category: 'Vegetables',
      image: '/images/potato1.jpg',
      price: 40,
      brand: 'Fresh',
      rating: '4.5',
      numReviews: 8,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Tomato',
      slug: 'tomato',
      category: 'Vegetables',
      image: '/images/tomato1.jpg',
      price: 35,
      brand: 'Fresh',
      rating: '4.6',
      numReviews: 12,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Katla',
      slug: 'katla',
      category: 'Fish',
      image: '/images/katla1.jpg',
      price: 45,
      brand: 'Fresh',
      rating: '4.9',
      numReviews: 11,
      countInStock: 20,
      description: 'Sweet water fish. Fresh Katla',
    },
    {
      name: 'Rohu',
      slug: 'rohu',
      category: 'Fish',
      image: '/images/rohu1.jpg',
      price: 150,
      brand: 'Fresh',
      rating: '4.8',
      numReviews: 9,
      countInStock: 20,
      description: 'Firm fresh potatos',
    },
    {
      name: 'Rice',
      slug: 'rice',
      category: 'grocery',
      image: '/images/rice1.jpg',
      price: 75,
      brand: 'Fresh',
      rating: '4.4',
      numReviews: 15,
      countInStock: 20,
      description: 'Fresh rice straight from bangladesh',
    },
    {
      name: 'Musur dal',
      slug: 'musur-dal',
      category: 'grocery',
      image: '/images/dal1.jpg',
      price: 92,
      brand: 'Fresh',
      rating: '4.3',
      numReviews: 9,
      countInStock: 25,
      description: 'Fresh Musur daal straight from bangladesh',
    },
  ],
}

export default data