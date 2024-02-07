

const jwt = require('jsonwebtoken');
const db = require("../model/db_query");
const tables = require("../utility/tables");
const response_format = require("../utility/response_format");

const authentication = async function (req, res, next) {
    try {
        // getting token from req(header)
        let token = req.headers["x-api-key"];
        const { user_id } = req.body
        var userId = user_id

        if (!user_id) {
            const user_id = req.query.user_id
            userId = user_id
        }
        const get_secret_key = await db.get_where_universal_data_specific(tables.user, { user_id: userId }, ["user_id", "secret_key"])

        if (get_secret_key.length == 0) {
            return response_format.error_for_user(res, "User registration not done")
        }
        if (!token) token = req.headers["X-Api-Key"];
        if (!token) {
            return response_format.error_for_user(res, "invalid user")
        }
        // token verification
        let checktoken = jwt.verify(token, get_secret_key[0].secret_key);
        if (!checktoken) {
            return response_format.error_for_user(res, "Enter valid token")
        }
        req.checktoken = checktoken
        next();
    }
    catch (err) {
        return response_format.error_for_user(res, err.message)
    }
}

module.exports.authentication = authentication

