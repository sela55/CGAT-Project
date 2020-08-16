const dbConf = require("../conf/dbconf");


//drop the current tables and creates new
async function dropCreateAndInsertDataTables(tableName,colsInfo,sheet) {
    let colsStmt = null;
    try { 
        await dbConf.maindbpool.query(`DROP TABLE IF EXISTS "${tableName}"`);
        await dbConf.maindbpool.query(`DROP TABLE IF EXISTS "${tableName} - KV"`);
    } catch(error) {
        console.error("Error on droping table: " + error.message);
    } finally {
        //check whether its better to use client and end connection
        //dbConf.maindbpool.end();
    }

    //the dropped tables are created here
    await createDataTable(tableName,colsInfo);
    await createDataTable(tableName+" - KV",colsInfo);
    await insertDataIntoKVTable(tableName+" - KV",colsInfo);
    await insertDataIntoDataTable(tableName,sheet)
}

//KV table insert dictionary values ({key(original column index): value (original column name)})
async function insertDataIntoKVTable(tableName,colsInfo) {
try {        
    let storeValuesSQL = `INSERT INTO "${tableName}"`;

    let colNameComma = colsInfo[1].map(name => {
        name = name.split('/').join('-');
        name = name.replace(/['"]+/g, '');
        return `'${name}'`;
    });
    colNameComma = colNameComma.join(",");
    
    storeValuesSQL = storeValuesSQL+` VALUES(${colNameComma});`;
    
    await dbConf.maindbpool.query(storeValuesSQL);
 
} catch(error) {
    console.error("Error on storing data into kv table -> "+error.message);
}
}

//creates data table \ kv table depends on given string
async function createDataTable(tableName,colsInfo) {
    try {
        let sql = `CREATE TABLE "${tableName}"(`;
        let colsStr = colsInfo[0].map(data => {
             return `"${data}" VARCHAR(255)`;
        });

        colsStmt = colsStr.join(',');

        sql = `${sql}${colsStmt});`;

        await dbConf.maindbpool.query(sql);
        console.log(sql);
    } catch(error) {
        console.error("Error on creating table: "+ error.message);
    }
}

//Data table insert all values from excel file
async function insertDataIntoDataTable(tableName,sheet) {
    let insertSQL = `INSERT INTO "${tableName}" VALUES(`;
    for (let cell in sheet) {
                if((cell.toString()).match( /^[A]([2-9]|[1-9][0-9]+)$/m)) {
                    //console.log(z.toString());
                    if((cell.toString()).match(/^A2$/m)) {
                        insertSQL = insertSQL + `'${((sheet[cell].v).toString()).replace(/["']/g, "")}'`;
                        
                    }
                    else {
                        insertSQL = insertSQL + `),\n(`;
                        insertSQL = insertSQL + `'${((sheet[cell].v).toString()).replace(/["']/g, "")}'`; 
                        
                    }
                }
                //everything that is from the second column
                else if((cell.toString()).match(/^(([A-Z][A-Z]+)|([B-Z]))(([1-9][0-9]+)|[2-9]+)$/m)){
                    insertSQL = insertSQL + `,'${((sheet[cell].v).toString()).replace(/["']/g, "")}'`;
                }

            }
            
            insertSQL = insertSQL + `);`;
            console.log(insertSQL);
            await dbConf.maindbpool.query(insertSQL);
}

module.exports = {dropCreateAndInsertDataTables};