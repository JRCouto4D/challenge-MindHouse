import * as Yup from 'yup';
import { Op } from 'sequelize';
import Product from '../models/Product';
import Category from '../models/Category';
import Image from '../models/Image';

class ProductController {
  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
      price: Yup.number().required(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation failed' });
    }

    const { category_id } = req.body;

    const category = await Category.findByPk(category_id);

    if (!category) {
      return res.status(401).json({ error: 'Category not found' });
    }

    const product = await Product.create(req.body);

    return res.json(product);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string(),
      price: Yup.number(),
      image_id: Yup.number(),
    });

    if (!(await schema.isValid(req.body))) {
      res.status(400).json({ error: 'Validation failed' });
    }

    const { product_id } = req.params;

    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(401).json({ error: 'Product not found' });
    }

    const { category_id: categoryID } = req.body;

    if (categoryID) {
      const category = await Category.findByPk(categoryID);

      if (!category) {
        return res.status(401).json({ error: 'Category not found' });
      }
    }

    const {
      id,
      description,
      price,
      image_id,
      category_id,
    } = await product.update(req.body);

    return res.json({
      id,
      description,
      price,
      image_id,
      category_id,
    });
  }

  async delete(req, res) {
    const { product_id } = req.params;

    const product = await Product.findByPk(product_id);

    if (!product) {
      return res.status(401).json({ error: 'Category not found' });
    }

    await product.destroy();

    return res.send();
  }

  async index(req, res) {
    const total = await Category.count();
    const products = await Product.findAll({
      include: [
        {
          model: Image,
          as: 'image',
          attributes: ['id', 'name', 'url'],
        },
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json({ products, total });
  }

  async show(req, res) {
    const { page = 1, description = '', category_id = 9 } = req.query;

    const total = await Product.count({
      where: {
        description: { [Op.iLike]: `${description}%`},
        category_id
      },
    });

    const products = await Product.findAll({
      where: {
        description: { [Op.iLike]: `${description}%` },
        category_id
     },
      limit: 5,
      offset: (page - 1) * 5,
      order: [['description', 'ASC']],
      include: [
        {
          model: Image,
          as: 'image',
          attributes: ['id', 'name', 'url'],
        },
        {
          model: Category,
          as: 'category',
          attributes: ['id', 'name'],
        },
      ],
    });

    return res.json({ products, total });
  }
}

export default new ProductController();
