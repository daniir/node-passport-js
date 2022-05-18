import express from "express";
import session from 'express-session';
import passport from 'passport';

//
import configKeys from './config/index';
import { CheckDbConnection } from './DbConnection';
import localStrategy from './middlewares/strategies/LocalStrategy';
import jwtStrategy from './middlewares/strategies/JwtStrategy';

//
import Auth from './routes/AuthRoute';
import Index from './routes/IndexRoute';

const app = express();

//Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(session({
    secret: configKeys.session_key,
    resave: true,
    saveUninitialized: true,
}));
app.use(passport.initialize());
app.use(passport.session());

//Passport
passport.use(localStrategy);
passport.use(jwtStrategy);

//DB
CheckDbConnection();

//Routes
app.use('/api/auth', Auth);
app.use('/api/', passport.authenticate('jwt', { session: false }), Index);

const port = configKeys.port;
app.listen(port, () => {
    console.log(`Server listen at http://localhost:${port}`);
});
