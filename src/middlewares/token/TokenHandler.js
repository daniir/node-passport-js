import jwt from 'jsonwebtoken';
import configKeys from '../../config';

export const CreateToken = (user) => {
    const token = jwt.sign({
        sub: user.id,
        name: user.name,
    }, configKeys.secret_key)

    return token;
};