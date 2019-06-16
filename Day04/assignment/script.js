class Bill{
    constructor( name, tip, amount, total)
    {
        this.name,
        this.tip,
        this.amount,
        this.total
    }
}

Bill.CalculateTip = (tipValuePercent) => {
    this.tip = this.tipValuePercent * this.amount;    
}

Bill.PrintToConsole = () => {
    console.log(BIll);
}

// Tip calculator

var SetToChecks = (listOfChecks) =>{
    
    let obj1 = new Bill( 'Richrad', 0, 19.99, 0 );
    let obj2 = new Bill( 'John', 0, 9.99, 0 );
    let obj3 = new Bill( 'Scott', 0, 49.99, 0 );

    listOfChecks = new Array( obj1, obj2, obj3);

    return;
}

CalculateTip = ( listOfBills) => {
    console.log("Calculating Tip");

    var tips = [ .1, .2, .3];

    listOfBills = listOfBills.map(function(tips, listOfBills){
        return listOfBills.amount * tips;
    })
}

PrintReceipts = (receipts) => {
    
    let obj4 = new Array(4);

    console.table(receipts);

    receipts.forEach(element => element.PrintToConsole());

    return;
}

main = () => {
    // Printing 
    console.log("Printing out checks and tips")

    let receipts = SetToChecks();

    CalculateTip(receipts);

    // Print out Info
    PrintReceipts(receipts);

}
  
main();