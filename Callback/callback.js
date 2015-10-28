    myFriends = ['Sam','John','Dave','Mary','Kim'];
myEnemies = ['Bowser', 'Koopa', 'Max']
function printThings(element,index,array) {
    console.log('Element :' + element + ', Index: ' + index + ', Array: ' + array);
}

myFriends.forEach(printThings);
myEnemies.forEach(printThings);

//function count() {
//    for(var i =0; i < 11; i++){
//        console.log(i);
//    }
//}
//
//setInterval(count,1000);