module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'products',
      [
        {
          description: 'acem',
          price: 17.65,
          category_id: 9,
          image_id: 9,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'alcatra',
          price: 22.42,
          category_id: 9,
          image_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'mignon',
          price: 68.8,
          category_id: 9,
          image_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'moida',
          price: 22.42,
          category_id: 9,
          image_id: 12,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'picanha',
          price: 33.98,
          category_id: 9,
          image_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'patinho',
          price: 31.27,
          category_id: 9,
          image_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'alcatra',
          price: 22.42,
          category_id: 10,
          image_id: 10,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'mignon',
          price: 68.8,
          category_id: 10,
          image_id: 11,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'picanha',
          price: 33.98,
          category_id: 10,
          image_id: 13,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          description: 'patinho',
          price: 31.27,
          category_id: 10,
          image_id: 14,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
