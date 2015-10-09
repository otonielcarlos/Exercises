var number1 = prompt('Type the first number');
var number2 = prompt('Type the second number');
var operation = prompt('Choose and operation : add, sub , mul , div');
   
// add section begin
if ( operation === 'add'){

    var sum = function(){
        return parseInt(number1) + parseInt(number2);
    }
    console.log('The result is ' + sum());

}

// sub section begin
if( operation === 'sub') {
    var sub = function(){

        return parseInt(number1) - parseInt(number2);
        }
        console.log('The result is' + ' ' + sub());
    }
 // mul section begin    
if (operation === 'mul'){

        var mul = function(){

        return parseInt(number1) * parseInt(number2);
    }
    console.log('The result is' + ' ' + mul());

//divide section begin
}
   if (operation ==='div'){
         if ( number2 == 0 ){
             alert('Please start over');
             var number1 = prompt('Type the first number');
             var number2 = prompt('Type the second number');
                            } 
        var divide = function(){
        return parseInt(number1) / parseInt(number2);
                        
                        }
    console.log('The result is ' + divide());     
}
       
    
