import { Router } from 'express';
import multer from 'multer';

import FileController from './app/controllers/FileController';
import CategoryController from './app/controllers/CategoryController';

import multerConfig from './config/multer';

const routes = new Router();
const upload = multer(multerConfig);

routes.get('/', (req, res) => {
  res.json({ message: 'Hello word!!' });
});

routes.post('/files', upload.single('file'), FileController.store);

routes.post('/categories', CategoryController.store);
routes.put('/categories/:category_id', CategoryController.update);
routes.delete('/categories/:category_id', CategoryController.delete);
routes.get('/categories', CategoryController.index);
routes.get('/categories/search', CategoryController.show);

export default routes;
