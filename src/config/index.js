import dotenv from 'dotenv';

dotenv.config();

const configKeys = {
    port: process.env.PORT || 8000,
    db_user: process.env.DB_USER,
    db_passwd: process.env.DB_PASSWD,
    db_host: process.env.DB_HOST,
    db_name: process.env.DB_NAME,
    db_port: Number(process.env.DB_PORT),
    secret_key: process.env.SECRET_KEY,
    session_key: process.env.SESSION_KEY,
    rounds_salt: Number(process.env.ROUNDSALT),
};

export default configKeys;