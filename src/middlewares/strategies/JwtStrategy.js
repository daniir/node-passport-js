import { Strategy,ExtractJwt } from 'passport-jwt';
import configKeys from '../../config/index';
import { User } from '../../models/index';

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: configKeys.secret_key,
    issuer: '',
    audience: '',
};

const jwtStrategy = new Strategy(
    opts,
    async(jwt_payload, done) => {
        try {
            const user = await User.findOne({where: {id: jwt_payload.sub}});
            if(!user) return done(null, false);

            delete user.dataValues.email;
            delete user.dataValues.password;
            delete user.dataValues.createdAt;
            delete user.dataValues.updatedAt;

            return done(null, user);

        } catch (error) {
            return done(error)
        };
    },
);

export default jwtStrategy;