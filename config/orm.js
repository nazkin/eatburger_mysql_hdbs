const connection = require('./connection');
const mysql = require('mysql');

const selectAll = (table, cb)=> {
    const queryStr = `SELECT * FROM ??`;
    connection.query(queryStr, [table], (err, burgers)=>{
        if(err) throw err;
        cb(burgers);
    });
}

const insertOne = (table,col_search1, col_search2, col_val1, col_val2, cb)=> {
    const queryStr =`INSERT INTO ??(??, ??) VALUES(?, ?)`;
    connection.query(queryStr, [table,col_search1, col_search2, col_val1, col_val2], (err, val)=> {
        if(err) throw err;
        console.log(`Successfull addition`);
        cb(val);
    });
}

const updateOne = (table,setcol,setcol_val,wherecol, wherecol_val, cb)=> {
    const queryStr = `UPDATE ?? SET ?? = ? WHERE ?? = ?`
    connection.query(queryStr, [table,setcol,setcol_val,wherecol, wherecol_val], (err, val)=>{
        if(err) throw err;
        console.log(`The burger was successfully devoured`);
        cb(val);
    });
}

module.exports = {
    selectAll, 
    insertOne,
    updateOne
}