import * as Yup from 'yup';
import { Op } from 'sequelize';
import Category from '../models/Category';
import Image from '../models/Image';

class CategoryController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation failed' });
    }

    const category = await Category.create(req.body);

    return res.json(category);
  }

  async update(req, res) {
    const { category_id } = req.params;

    const category = await Category.findByPk(category_id);

    if (!category) {
      return res.status(401).json({ error: 'Category not found' });
    }

    const { id, name } = await category.update(req.body);

    return res.json({
      id,
      name,
    });
  }

  async delete(req, res) {
    const { category_id } = req.params;

    const category = await Category.findByPk(category_id);

    if (!category) {
      return res.status(401).json({ error: 'Category not found' });
    }

    await category.destroy();

    return res.send();
  }

  async index(req, res) {
    const total = await Category.count();
    const categories = await Category.findAll({
      include: [
        {
          model: Image,
          as: 'image',
          attributes: ['id', 'name', 'url'],
        },
      ],
    });

    return res.json({ categories, total });
  }

  async show(req, res) {
    const { page = 1, name = '' } = req.query;

    const total = await Category.count({
      where: { name: { [Op.iLike]: `${name}%` } },
    });

    const categories = await Category.findAll({
      where: { name: { [Op.iLike]: `${name}%` } },
      limit: 8,
      offset: (page - 1) * 8,
      order: [['name', 'ASC']],
      include: [
        {
          model: Image,
          as: 'image',
          attributes: ['id', 'name', 'url'],
        },
      ],
    });

    return res.json({ categories, total });
  }
}

export default new CategoryController();
