const config = require("../config/config");

module.exports.error_for_developer = async function (res, error_code, msg) {
    // console.log(error);
    return res.status(config.HTTP_BAD_REQUEST).send({
      status_code: error_code,
      status: false,
      data: [],
      msg: msg
    })
  }
  
  // create a function that send error for users
  module.exports.error_for_user = async function (res, msg) {
    return res.status(config.HTTP_SUCCESS).send({
      status_code: config.HTTP_SUCCESS,
      status: false,
      msg: msg,
      data: [],
    })
  }
  
  module.exports.success_for_user = async function (res, data, msg) {
    return res.status(config.HTTP_SUCCESS).send({
      status_code: config.HTTP_SUCCESS,
      status: true,
      msg: msg,
      data: data,
    })
  }

  module.exports.created_success_for_user = async function (res, data, msg) {
    return res.status(config.HTTP_SUCCESSFULLY_CREATED).send({
      status_code: config.HTTP_SUCCESSFULLY_CREATED,
      status: true,
      msg: msg,
      data: data,
    })
  }

module.exports.server_error = async function (res, error) {
    return res.status(config.HTTP_SERVER_ERROR).send({
        status_code: config.HTTP_SERVER_ERROR,
        status: false,
        msg: error,
        data: [],
    });
}