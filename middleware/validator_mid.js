const validator = require("../utility/validation");
const config = require("../config/config");
const c = require("../utility/constants");

const resp_format = require("../utility/response_format");
const tables = require("../utility/tables")
const response_format = (res, error, value, value_key) => {
  return resp_format.error_for_developer(res, config.required_field, `${error.details[0].message} : ${value}`)
}




module.exports.validate_add_category = (req, res, next) => {
 const {user_id, category_name} = req.body

  const user_id_error = validator.validate_string_min_max_required(user_id, c.user_id_min, c.user_id_max)
  if (user_id_error) {
    return response_format(res, user_id_error, 'user_id')
  }

  const category_name_error = validator.validate_string_min_max_required(category_name, c.category_name_min, c.category_name_max)
  if (category_name_error) {
    return response_format(res, category_name_error, 'category_name')
  }
  next()
}


module.exports.validate_update_category = (req,res,next) =>{
  const categoryId = req.params.categoryId
  const {user_id,category_name} = req.body


  const user_id_error = validator.validate_string_min_max_required(user_id, c.user_id_min, c.user_id_max)
  if (user_id_error) {
    return response_format(res, user_id_error, 'user_id')
  }

  const category_name_error = validator.validate_string_min_max_required(category_name, c.category_name_min, c.category_name_max)
  if (category_name_error) {
    return response_format(res, category_name_error, 'category_name')
  }
  next()
}


module.exports.validate_delete_category = (req,res,next) =>{
  const categoryId = req.params.categoryId
  const {user_id} = req.body


  const user_id_error = validator.validate_string_min_max_required(user_id, c.user_id_min, c.user_id_max)
  if (user_id_error) {
    return response_format(res, user_id_error, 'user_id')
  }

  next()
}