(function() {
// Obtain a reference to the canvas element
// using its id.
canvas = document.getElementById('canvas');
// Obtain a graphics context on the
// canvas element for drawing.
c = canvas.getContext('2d');
 
// Start listening to resize events and
// draw canvas.
initialize();
 
function initialize() {
// Register an event listener to
// call the resizeCanvas() function each time
// the window is resized.
window.addEventListener('resize', resizeCanvas, false);
// Draw canvas border for the first time.
resizeCanvas();
}
    
/* Display custom canvas.
   In this case it's a blue, 5 pixel border that
   resizes along with the browser window.
function redraw() {
c.strokeStyle = 'blue';
c.lineWidth = '5';
c.strokeRect(0, 0, window.innerWidth, window.innerHeight);
} */

    
// Runs each time the DOM window resize event fires.
// Resets the canvas dimensions to match window,
// then draws the new borders accordingly.
function resizeCanvas() {
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
console.log("Canvas resized. H:"+canvas.height+" W:"+canvas.width);
redraw();
    
}
})();