import bcrypt from 'bcrypt';
import { User } from '../models/index';
import configKeys from '../config/index';
import { CreateToken } from '../middlewares/token/TokenHandler';

export const SignUp = async(req, res) => {
    const {name, email, password} = req.body;
    try {
        const user = await User.findOne({where: {email}});
        if(user) return res.json({
            msg: "The user is already registred"
        });

        const hashedPasswd = await bcrypt.hash(password, configKeys.rounds_salt);
        const newUser = {
            name,
            email,
            password: hashedPasswd,
        };

        await User.create(newUser);

        return res.status(201).json({
            msg: 'New User Added',
        });

    } catch (error) {
        console.error(`SignUpError: ${error}`);
    }
};

export const SignIn = async(req, res) => {
    const user = req.user;

    if (!user) return res.json({
        msg: 'No user login',
    });

    const token = CreateToken(user);

    return res.json({
        msg: 'Access Granted',
        token,
    });
};