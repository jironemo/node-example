var rect = require('./Rectangle');
function solveRect(l,b){
    console.log("Solving for rectangle with l = " + l + " and b = " + b);

    rect (l,b,(err,Rectangle) => {
        if(err){
            console.log("Error:" , err.message);
        }
        else{
            console.log("The area of the rectangle with dimensions ("+ l +","+b+") is:" + Rectangle.area());
            console.log("The perimeter of the rectangle with dimensions ("+ l +","+b+") is:"+ Rectangle.perimeter());
            
        }
    });
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,5);
solveRect(-3,5);

