module.exports = {
  up: (QueryInterface) => {
    return QueryInterface.bulkInsert(
      'images',
      [
        {
          name: 'acem',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'alcatra',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'mignon',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'moida',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'picanha',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'patinho',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
