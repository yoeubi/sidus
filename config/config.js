module.exports = {
    development: {
        username: process.env.RDS_USERNAME,
        password: process.env.RDS_PASSWORD,
        database: process.env.RDS_DATABASE,
        host: process.env.RDS_HOST,
        dialect: process.env.RDS_DIALECT,
        define: {
            charset: "utf8"
        }
    },
    test: {
        username: "root",
        password: null,
        database: "database_test",
        host: "127.0.0.1",
        dialect: "mysql"
    },
    production: {
        username: "root",
        password: null,
        database: "database_production",
        host: "127.0.0.1",
        dialect: "mysql"
    }
};
