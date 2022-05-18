import {sequelize} from './models/index';

export const CheckDbConnection = async() => {
    try {
        await sequelize.authenticate();
        console.log('Connection establish with DB');
    } catch (error) {
        console.error(`DbConnError: ${error}`);
    }
};