import { Router } from 'express';

import ImageController from './app/controllers/ImageController';
import CategoryController from './app/controllers/CategoryController';

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Hello word!!' });
});

routes.post('/images', ImageController.store);

routes.post('/categories', CategoryController.store);
routes.put('/categories/:category_id', CategoryController.update);
routes.delete('/categories/:category_id', CategoryController.delete);
routes.get('/categories', CategoryController.index);
routes.get('/categories/search', CategoryController.show);

export default routes;
