import {Strategy} from 'passport-local';
import {User} from '../../models/index';
import bcrypt from 'bcrypt';

const opts = {
    usernameField: 'email',
    passwordField: 'password',
};

const localStrategy = new Strategy(
    opts,
    async(email, password, done) => {
        try {
            const user = await User.findOne({where: {email}});
            if(!user) return done(null, false);

            if(!await bcrypt.compare(password, user.getDataValue('password'))){
                return done(null, false);
            };

            delete user.dataValues.email;
            delete user.dataValues.password;
            delete user.dataValues.createdAt;
            delete user.dataValues.updatedAt;

            return done(null, user);

        } catch (error) {
            done(error)
        }
    },
);

export default localStrategy;