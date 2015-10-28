//var names = ['Tom','Sam','Ben','John','Carl','Rick','Walter','Thomas'];
//
//
//var dontCall = function(){
//    console.log('You did not call ' + names);   
//}
//var call = function(){
//    console.log('You talked to ' + names)
//}
//
////var sendText = function(){
////    if(names    )
////    console.log('You texted  ' + names)
//
//
//var attemptCall = function(dc, c, st){
//    for (var i= 0; i < names.length; i++){
//    
//  
//  names=names[i];
//    }
//}
//
//console.log('Your calling ...');
//setInterval(attemptCall(dontCall,call) , 1000);
//
//

//
//var cowTalk = function() {
//    console.log('moo');
//}
//
//var catTalk = function() {
//    console.log('meow');
//}
//
//function talk(name, callback) {
//
//    console.log("My names is: " + name);
//    callback();
//
//}
//
//talk('Cat', catTalk);
//talk('Cow', cowTalk);

var names = ["Paula", "Bill", "Jane", "Joe", "Fred", "Bob", "Dallin", "James", "Andy", "Don"]

var dontCall = function(name) {
    console.log("You did not call " + name);
}

var call = function(name) {
    console.log("You talked to " + name);
}

var sendText = function(name) {
    console.log("You texted " + name);
}

var attemptCall = function(name, dontCall, call, sendText) {

    var aCount = 0;

    for(var i = 0; i < name.length; i++) {
        if (name[i].toLowerCase() === 'a') {
            aCount++;
        }
    }

    console.log("Contacting " + name + '...');

    setTimeout(function(){
        if (aCount > 1) {
            sendText(name);
        } else {
            if (name.length % 2 === 1) {
                dontCall(name);
            } else {
                call(name);
            }
        }
    }, 2000);

}

for (var i = 0; i < names.length; i++) {
    attemptCall(names[i], dontCall, call, sendText);
}   