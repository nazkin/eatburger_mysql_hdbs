const connection = require('./connection');


const selectAll = (table)=> {
    const query = "SELECT * FROM ?";
    connection.query(query, [table], (err, burgers)=>{
        if(err) throw err;
        return burgers;
    });
}

const insertOne = (table,col_search1, col_search2, col_val1, col_val2 )=> {
    const query =`INSERT INTO ?(?, ?) VALUES(?, ?)`;
    connection.query(query, [table,col_search1, col_search2, col_val1, col_val2], (err)=> {
        if(err) throw err;
        console.log(`Successfull addition`);
    });
}

const updateOne = (table,setcol,setcol_val,wherecol, wherecol_val)=> {
    const query = `UPDATE ? SET ? = ? WHERE ? = ?`
    connection.query(query, [table,setcol,setcol_val,wherecol, wherecol_val], err=>{
        if(err) throw err;
        console.log(`The burger was successfully devoured`);
    });
}

module.exports = {
    selectAll, 
    insertOne,
    updateOne
}