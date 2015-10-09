var images = ['http://mjebb2.rochestercs.org/project03/inc/logo.jpg',
              'http://intelligents.wpengine.netdna-cdn.com/wp-content/uploads/2012/05/facebook-logo-thumbs-up.png',
              'http://www.wildernesssurvivalskills.org/wp-content/uploads/2014/01/thumbs-up.png'];



var imgDiv = document.getElementById('imgs');

for ( var i = 0 ; i < images.length; i++){

var imgElem = document.createElement('img');   
imgElem.src= images[i];
imgDiv.appendChild(imgElem);    
}