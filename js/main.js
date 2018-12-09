/* eslint-env jquery */

var dropTarget = document.querySelector('.wrapper');
var draggables = document.querySelectorAll('.task');

for (var i = 0; i < draggables.length; i++) {
    draggables[i].addEventListener('dragstart', function(ev) {
        ev.dataTransfer.setData('srcId', ev.target.id);
    });
}

dropTarget.addEventListener('dragover', function(ev) {
    ev.preventDefault();
});

dropTarget.addEventListener('drop', function(ev) {
    let target = ev.target;
    let srcId = ev.dataTransfer.getData('srcId');
    let droppable = target.classList.contains('box');

    ev.preventDefault();
    if (droppable) {
        target.appendChild(document.getElementById(srcId));
    }
});

$('header').html('<h1>JS Drag And Drop</h1>');
$('#theFooter').html('<h3>Some Stuff In The Footer</h3>');