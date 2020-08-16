const dbFuncs = require("./dbfunc");


async function parseExcelWorkBook(workBook) {
    let sheetNames = workBook.SheetNames;
    let sheets = workBook.Sheets;
    let sheet = null;
    for(tableName of sheetNames) {
        sheet = sheets[tableName];
        let colsInfo = await getColsInfo(sheet);
        
        tableName = tableName.replace(/['"]+/g, '');

        //if everything went well return OK
        await dbFuncs.dropCreateAndInsertDataTables(tableName,colsInfo,sheet); //drop and create both table and kv table
    }
    return 1;
}

//get structure which holds cols info (index-header) {colsIndexes,colsNames};
async function getColsInfo(sheet) {
    let colsInfo = new Array();
    let colNames = new Array();
    let colIndexes = new Array();
    let colIndexesPatt = /^[A-Z][A-Z]*[1]$/m;
    //let pattNoNums = /^[A-Z][A-Z]*/m;

    
    for(let cellKey in sheet) {
        if((cellKey.toString()).match(colIndexesPatt)) {
            colNames.push(sheet[cellKey].v);
            colIndexes.push(cellKey.toString());   
        }
    }

    colsInfo.push(colIndexes);
    colsInfo.push(colNames);
    
    return colsInfo;
}

module.exports = {parseExcelWorkBook};