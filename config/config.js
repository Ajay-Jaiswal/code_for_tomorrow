

const dotenv = require('dotenv').config();

const { port, JWT_secret_key, HTTP_BAD_REQUEST, HTTP_UNAUTHORISED, HTTP_FORBIDDEN, HTTP_NOTFOUND, HTTP_SERVER_ERROR, HTTP_SUCCESS, HTTP_SUCCESSFULLY_CREATED, host, database, user, password } = process.env

module.exports = {
    port: port,
    JWT_secret_key: JWT_secret_key,
    HTTP_BAD_REQUEST: parseInt(HTTP_BAD_REQUEST),
    HTTP_UNAUTHORISED: parseInt(HTTP_UNAUTHORISED),
    HTTP_FORBIDDEN: parseInt(HTTP_FORBIDDEN),
    HTTP_NOTFOUND: parseInt(HTTP_NOTFOUND),
    HTTP_SERVER_ERROR: parseInt(HTTP_SERVER_ERROR),
    HTTP_SUCCESS: parseInt(HTTP_SUCCESS),
    HTTP_SUCCESSFULLY_CREATED: parseInt(HTTP_SUCCESSFULLY_CREATED),
    host: host,
    database: database,
    user: user,
    password: password,
    required_field: 14001
}