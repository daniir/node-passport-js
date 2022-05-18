import { Router } from 'express';
import { Home } from '../controllers/IndexController';

const route = Router();

route.get('/', Home);

export default route;