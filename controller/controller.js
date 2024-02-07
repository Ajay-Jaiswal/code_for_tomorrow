

require("dotenv").config();
const db = require("../model/db_query");
const { ticket_id_generator } = require("../utility/id_generator");
hardcoded_data = require("../utility/hardcoded_data");
const config = require("../config/config");
const response_format = require("../utility/response_format");
const jwt = require("jsonwebtoken")
const table = require("../utility/tables");







module.exports.login_user = async function(req,res){
try{
  const {email,password} = req.body
  const get_email_data = await db.get_where_universal_data_specific(table.user,{email: email,password :password },[
"user_name",
"email",  
"user_id" ,
"password" ,
"secret_key"
  ])

  if(get_email_data.length == 0){
    return response_format.error_for_user(res,"Invalid email or password")
  }
let token = jwt.sign(
  {
    email: email,
  },
  get_email_data[0].secret_key
)
//  res.setHeader("x-api-key", token);

 return response_format.created_success_for_user(res,{token : token,user_id :get_email_data[0].user_id},"User successfully logged in")
}catch(err){
  return response_format.server_error(res,err.message)
}
}


module.exports.create_category = async function(req,res){
  try{
    const {user_id, category_name} = req.body
    const create_category_in_table = await db.create_universal_data(table.category,{category_name : category_name})

    return response_format.created_success_for_user(res,[],"Category data added successfully.")

  }catch(err){
    return response_format.server_error(res,err.message)
  }
}


module.exports.get_category_data = async function(req,res){
  try{
    const user_id = req.query.user_id

    const get_all_category_data = await db.get_all_universal_data(table.category)

    return response_format.success_for_user(res,get_all_category_data,"get all Category list")

  }catch(err){
    return response_format.server_error(res,err.message)
  }
}


module.exports.update_category = async function(req,res){
  try{
    const categoryId = req.params.categoryId
    const {user_id,category_name} = req.body

    const get_category_data = await db.get_where_universal_data(table.category,{id: categoryId})
    
    if(get_category_data.length == 0){
      return response_format.error_for_user(res,"categoryId does'nt exist")
    }

    const update_category = await db.update_universal_data(table.category,{category_name : category_name},{id : categoryId})
    return response_format.success_for_user(res,[],"category updated successfully")

  }catch(err){
    return response_format.server_error(res,err.message)
  }
}


module.exports.delete_category = async function(req,res){
  try{
    const categoryId = req.params.categoryId
    const {user_id} = req.body

    const update_category = await db.delete_universal_data(table.category,{id : categoryId})
    return response_format.success_for_user(res,[],"category updated successfully")

  }catch(err){
    return response_format.server_error(res,err.message)
  }
}