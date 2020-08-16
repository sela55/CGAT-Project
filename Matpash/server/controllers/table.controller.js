const xlsx = require("xlsx");
const db = require("../conf/dbconf")
const maindbpool = db.maindbpool;

exports.getTablesName = async(req, res)=>{
    maindbpool.query("SELECT table_name FROM information_schema.tables WHERE table_schema='public' and table_name not like '%KV%' ")
    .then(result =>{
        tbList = result.rows.map( t=> t.table_name)
        res.status(200).json({
            msg: 'ok',
            tableList: tbList
        })
    }).catch(err =>{
        res.status(404).json({
            error: err
        })
    })
}

exports.getColFromTable = async(req, res)=>{
    let { tableName } = req.body;
    console.log(req.body);
    tableName = `${tableName} - KV`
    console.log(tableName);

    maindbpool.query(`SELECT * FROM "${tableName}" `)
    .then(result =>{
        cols = Object.values(result.rows[0]);
        console.log(cols);
        res.status(200).json({
            msg: 'ok',
            colNamesList : cols
        })
    }).catch(err =>{
        res.status(404).json({
            error: err
        })
    })

}