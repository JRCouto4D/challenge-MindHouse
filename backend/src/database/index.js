import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import Category from '../app/models/Category';
import Image from '../app/models/Image';
import Product from '../app/models/Product';

const models = [Category, Image, Product];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new DataBase();
