module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('categories', 'image_id', {
      type: Sequelize.INTEGER,
      references: {
        model: 'images',
        key: 'id',
      },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNull: true,
    });
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('categories', 'image_id');
  },
};
