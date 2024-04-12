require('dotenv').config()

module.exports = {
    redis: JSON.parse(process.env.REDIS_DATASOURCE)
}
