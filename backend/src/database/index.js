import Sequelize from 'sequelize';

import databaseConfig from '../config/database';
import File from '../app/models/File';
import Category from '../app/models/Category';

const models = [File, Category];

class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map((model) => model.init(this.connection));
  }
}

export default new DataBase();
