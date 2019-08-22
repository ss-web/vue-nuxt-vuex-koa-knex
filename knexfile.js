module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'localhost',
            user: 'postgres',
            password: '1',
            database: 'chat'
        },
        pool: { min: 0, max: 7 }
    }
}