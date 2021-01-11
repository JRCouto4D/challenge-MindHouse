module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'categories',
      [
        {
          name: 'Carnes',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 1,
        },
        {
          name: 'Especiarias',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 2,
        },
        {
          name: 'Frutos do mar',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 3,
        },
        {
          name: 'Hortifruti',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 4,
        },
        {
          name: 'PetShop',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 5,
        },
        {
          name: 'Supermercados',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 6,
        },
        {
          name: 'Bebidas',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 7,
        },
        {
          name: 'Padarias',
          created_at: new Date(),
          updated_at: new Date(),
          image_id: 8,
        },
        {
          name: 'Carne Bovina',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Especiais',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
