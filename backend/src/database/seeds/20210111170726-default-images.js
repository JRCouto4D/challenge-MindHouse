module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'images',
      [
        {
          name: 'carnes',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'especiarias',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'frutosDoMar',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'hortifruti',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'petShop',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'supermercados',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'bebidas',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'padarias',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
