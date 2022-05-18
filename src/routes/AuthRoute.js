import { Router } from 'express';
import { SignIn, SignUp } from '../controllers/AuthController';
import passport from 'passport';

const route = Router();

route.post('/signup', SignUp);
route.post('/signin', passport.authenticate('local', {session: false}), SignIn);

export default route;