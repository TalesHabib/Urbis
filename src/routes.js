import { Router } from 'express';

import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import TaskController from './app/controllers/TaskController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.get('/tasks', TaskController.index);
routes.post('/tasks', TaskController.store);
routes.delete('/tasks/:id', TaskController.delete);
routes.put('/tasks/:id', TaskController.update);

export default routes;
