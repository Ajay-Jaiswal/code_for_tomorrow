
const { connection } = require('../config/db_connection')


module.exports.create_universal_data = async function (database_table_name, obdata) {
  return await new Promise((resolved, reject) => {
    connection.connect(function (err) {
      if (err) throw err;
      var abkey = Object.keys(obdata)
      var abvalue = Object.values(obdata)
      var sql = `INSERT INTO ${database_table_name} (${abkey}) VALUES ?`
      var values = [abvalue];
      connection.query(sql, [values], function (err, result) {
        if (err) throw err
        resolved(result)
      });
    });
  })
}


module.exports.get_all_universal_data = async function (database_table_name) {
  return await new Promise((resolved, reject) => {
    var sql = 'SELECT * FROM ' + database_table_name;
    connection.query(sql, function (err, result) {
      if (err) throw err;
      resolved(result)
    })
  })
}


module.exports.get_where_universal_data = async function (database_table_name, filterquery) {
  return await new Promise((resolved, reject) => {
    var abkey = Object.keys(filterquery)
    var abvalue = Object.values(filterquery)
    const abkeydata = abkey.join('=? and ') + "=?"
    var sql = `SELECT * FROM ${database_table_name} WHERE ${abkeydata}`;
    connection.query(sql, abvalue, function (err, result) {
      if (err) throw err;
      resolved(result)
    })
  })
}


module.exports.get_where_universal_data_specific = async function (database_table_name, filterquery, fields) {
  return await new Promise((resolved, reject) => {
    var abkey = Object.keys(filterquery)
    var abvalue = Object.values(filterquery)
    const abkeydata = abkey.join('= ? AND ') + "= ?"
    var sql = `SELECT ${fields} FROM ${database_table_name} WHERE ${abkeydata}`;
    console.log("sql : " + sql)
    connection.query(sql, abvalue, function (err, result) {
      if (err) throw err;
      // console.log(result);
      resolved(result);
    })
  })
}



module.exports.universal_customize_query = async function (sql, value) {
  return await new Promise((resolved, reject) => {
    connection.query(sql, value, function (err, result) {
      if (err) {
        console.log(err)
        resolved(err)
      };
      resolved(result)
    })
  })
}


module.exports.get_where_universal_data_specific_or = async function (database_table_name, filterquery, fields) {
  return await new Promise((resolved, reject) => {
    //[asset_id_btx, main_balance_btx, locked_balance_btx, current_balance_btx]
    var abkey = Object.keys(filterquery)
    var abvalue = Object.values(filterquery)
    const abkeydata = abkey.join('= ? OR ') + "= ?"
    // console.log("abkeydata : " + abkeydata)
    var sql = `SELECT ${fields} FROM ${database_table_name} WHERE ${abkeydata}`;
    connection.query(sql, abvalue, function (err, result) {
      if (err) throw err;
      // console.log(result);
      resolved(result);
    })
  })
}




module.exports.update_universal_data = async function (database_table_name, updatedata, filterquery) {
  return await new Promise((resolved, reject) => {
    var abkey = Object.keys(updatedata)
    var abvalue = Object.values(updatedata)
    const abkeydata = abkey.join('= ? , ') + '= ? '

    ////////////////////////      
    var filterkey = Object.keys(filterquery)
    var filtervalue = Object.values(filterquery)
    const filterkeydata = filterkey.join('= ? AND ') + " = ?"

    var values = [...abvalue, ...filtervalue];
    ///////////////       
    connection.connect(function (err) {
      //   if (err) throw err;         
      var sql = `UPDATE ${database_table_name} SET ${abkeydata} WHERE ${filterkeydata}`
      connection.query(sql, values, function (err, result) {
        if (err) throw err;
        resolved(result)
      });
    });
  })
}


module.exports.get_db_data = async function (sql) {
  return await new Promise((resolved, reject) => {
    //var sql = `SELECT * FROM ${database_table_name} where ${column_name} between '${value1}' and '${value2}' and ${condition1} and ${condition2} and ${condition3}`;
    connection.query(sql, function (err, result) {
      if (err) {
        //reject(err)
        console.log(err)
        resolved(err)
        //throw err
      };
      //console.log(result);
      resolved(result)
    })
  })
}


module.exports.delete_universal_data = async function (database_table_name, filterquery) {
  return new Promise((resolved, reject) => {
    // Extract keys and values from the filterquery object
    var filterkey = Object.keys(filterquery);
    var filtervalue = Object.values(filterquery);
    
    // Construct the filter key-value pairs for the WHERE clause
    const filterkeydata = filterkey.join(' = ? AND ') + " = ?";

    // Establish a database connection
    connection.connect(function (err) {
      if (err) {
        reject(err); // Reject the promise if connection fails
      } else {
        // Construct the SQL DELETE query
        var sql = `DELETE FROM ${database_table_name} WHERE ${filterkeydata} limit 1`;
        
        // Execute the SQL query with the filter values
        connection.query(sql, filtervalue, function (err, result) {
          if (err) {
            reject(err); // Reject the promise if query execution fails
          } else {
            resolved(result); // Resolve the promise with the query result
          }
        });
      }
    });
  });
};
