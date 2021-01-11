import { Router } from 'express';

import ImageController from './app/controllers/ImageController';
import CategoryController from './app/controllers/CategoryController';
import ProductController from './app/controllers/ProductController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Hello word!!' });
});

routes.post('/images', ImageController.store);

/**
 * routes that will handle categories
 */

routes.post('/categories', CategoryController.store);
routes.put('/categories/:category_id', CategoryController.update);
routes.delete('/categories/:category_id', CategoryController.delete);
routes.get('/categories', CategoryController.index);
routes.get('/categories/search', CategoryController.show);

/**
 * routes that will handle products
 */

routes.post('/products', ProductController.store);
routes.put('/products/:product_id', ProductController.update);
routes.delete('/products/:product_id', ProductController.delete);
routes.get('/products', ProductController.index);
routes.get('/products/search', ProductController.show);

export default routes;
