import Sequelize, { Model } from 'sequelize';

class Image extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/images/${this.name}.png`;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }
}

export default Image;
