let mainDiv = document.querySelector('#container');
let firstDiv = mainDiv.children[0];
let secDiv = mainDiv.children[1];
// console.log(firstDiv,secDiv)
mainDiv.insertBefore(secDiv,firstDiv);