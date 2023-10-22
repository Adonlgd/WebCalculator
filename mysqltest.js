const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "127.0.0.1", // 数据库主机名
    user: "root", // 数据库用户名
    password: "lgd000", // 数据库密码
    database: "jdbc_demo" // 数据库名称
  });

connection.connect((error) => {
  if (error) {
    console.error('Failed to connect to database:', error);
    return;
  }

  console.log('Connected to database!');
  // 在这里执行查询等操作
});

connection.query('SELECT * FROM user', (error, results) => {
    if (error) {
      console.error('Failed to execute query:', error);
      return;
    }
  
    console.log('Query results:', results);
    // 在这里处理查询结果
  });
  
//const pa = [6, "kim", "9"];
//const sql = "INSERT INTO user values (?, ?, ?)";

//connection.query(sql, pa, (error, results) => {
   // if (error) {
   //     console.error('Failed to execute query:', error.message);
   //     return;
   //   }
   // 
   //   console.log('success');
   //   // 在这里处理查询结果
//});

connection.end();

