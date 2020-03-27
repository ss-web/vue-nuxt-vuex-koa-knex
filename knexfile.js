// console.log(process.env.POSTGRESS_HOST, process.env.POSTGRESS_USER, process.env.POSTGRESS_PASSWORD, process.env.POSTGRESS_DB, process.env.POSTGRESS_CHARSET);

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      port: '5432', //5432
      user: 'postgres',
      password: '1',
      database: 'chat',
      // connectTimeout: 90000
    },
    pool: {
      min: 0,
      max: 7,
      // createTimeoutMillis: 3000,
      // acquireTimeoutMillis: 30000,
      // idleTimeoutMillis: 30000,
      // reapIntervalMillis: 1000,
      // createRetryIntervalMillis: 100,
      // propagateCreateError: false
    }
  }
}
