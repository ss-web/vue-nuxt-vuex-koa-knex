module.exports = {
  development: {
      client: 'pg',
      connection: {
          host: process.env.POSTGRESS_HOST,
          user: process.env.POSTGRESS_USER,
          password: process.env.POSTGRESS_PASSWORD,
          database: process.env.POSTGRESS_DB
      },
      pool: { min: 0, max: 7 }
  }
}
