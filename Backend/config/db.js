const CONFIG_BD = {
    user: DB_USER = process.env.DB_USER || 'postgres',
    host: DB_HOST = process.env.DB_HOST || 'localhost',
    database: DB_DATABASE = process.env.DB_DATABASE || 'ClarBank',
    password: DB_PASSWORD = process.env.DB_PASSWORD || 'admin',
    port: DB_PORT = process.env.DB_PORT || 5432 //Puerto predeterminado de PostgreSQL
}

module.exports = {
    CONFIG_BD ,
};

